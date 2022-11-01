import {
  computed,
  onMounted,
  onBeforeUnmount,
  reactive,
  ref,
  type Ref,
} from "vue";
import { throttle } from "./";

export function useSvgViewBoxZoom(svgRef: Ref<SVGElement | null>) {
  const MIN_SCALE = 0.1;
  const MAX_SCALE = 12;
  const SCROLL_CHANGE_AMMOUNT = 0.002;

  const viewbox = reactive<{
    scale: number;
    minX: number;
    minY: number;
  }>({ scale: 1, minX: 0, minY: 0 });

  const svgWidth = ref<number>(100);
  const svgHeight = ref<number>(100);

  onMounted(() => {
    window.addEventListener("resize", resizeSvgDimensions);
    resizeSvgDimensions();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeSvgDimensions);
  });

  const resizeSvgDimensions = (): void => {
    if (svgRef.value) {
      svgWidth.value = svgRef.value.clientWidth;
      svgHeight.value = svgRef.value.clientHeight;
    }
  };

  const wheelEvent = (wheelEv: WheelEvent): void => {
    const { offsetX, offsetY, deltaY } = wheelEv;

    const lastScale = viewbox.scale;

    viewbox.scale *= 1 + deltaY * SCROLL_CHANGE_AMMOUNT;
    if (viewbox.scale < MIN_SCALE) viewbox.scale = MIN_SCALE;
    else if (viewbox.scale > MAX_SCALE) viewbox.scale = MAX_SCALE;

    viewbox.minX += offsetX * lastScale - offsetX * viewbox.scale;
    viewbox.minY += offsetY * lastScale - offsetY * viewbox.scale;
  };

  type Point = { x: number; y: number };

  const lastPointerPosition = new Map<number, Point>();
  const currentPointerPosition = new Map<number, Point>();

  const pointerDownEvent = (ev: PointerEvent) => {
    lastPointerPosition.set(ev.pointerId, { x: ev.offsetX, y: ev.offsetY });
    currentPointerPosition.set(ev.pointerId, { x: ev.offsetX, y: ev.offsetY });
  };

  const pointerMoveEvent = (ev: PointerEvent) => {
    // ev.preventDefault();

    if (ev.buttons === 1) {
      currentPointerPosition.set(ev.pointerId, {
        x: ev.offsetX,
        y: ev.offsetY,
      });

      zoomPanSvg();
    }
  };

  const pointerUpEvent = (ev: PointerEvent) => {
    lastPointerPosition.delete(ev.pointerId);
    currentPointerPosition.delete(ev.pointerId);
  };
  const pointerCancelEvent = (ev: PointerEvent) => {
    lastPointerPosition.delete(ev.pointerId);
    currentPointerPosition.delete(ev.pointerId);
  };

  const zoomPanSvg = throttle(() => {
    console.log("Zoom and Pan Function");

    if (lastPointerPosition.size === 0) {
      return; // The throttle can fire a event, after the pointer has already left
    }

    if (lastPointerPosition.size === 2) {
      const lastScale = viewbox.scale;
      const [touch1Last, touch2Last] = lastPointerPosition.values();
      const [touch1Curr, touch2Curr] = currentPointerPosition.values();

      const pitchFactor =
        // Calculate distance last touch
        Math.sqrt(
          Math.pow(touch1Last.x - touch2Last.x, 2) +
            Math.pow(touch1Last.y - touch2Last.y, 2)
        ) /
        // Calculate distance current touch
        Math.sqrt(
          Math.pow(touch1Curr.x - touch2Curr.x, 2) +
            Math.pow(touch1Curr.y - touch2Curr.y, 2)
        );

      viewbox.scale *= pitchFactor;
      if (viewbox.scale < MIN_SCALE) viewbox.scale = MIN_SCALE;
      else if (viewbox.scale > MAX_SCALE) viewbox.scale = MAX_SCALE;

      viewbox.minX +=
        ((touch1Curr.x + touch2Curr.x) / 2) * lastScale -
        ((touch1Curr.x + touch2Curr.x) / 2) * viewbox.scale;
      viewbox.minY +=
        ((touch1Curr.y + touch2Curr.y) / 2) * lastScale -
        ((touch1Curr.y + touch2Curr.y) / 2) * viewbox.scale;
    }

    let panX = 0;
    let panY = 0;

    lastPointerPosition.forEach((lastPoiPos, poiId) => {
      const currPoiPos = currentPointerPosition.get(poiId);
      if (!currPoiPos) {
        console.error(
          `Pointerevent for Id ${poiId} is only defined for last and not current`
        );
        return;
      }

      panX += (lastPoiPos.x - currPoiPos.x) * viewbox.scale;
      panY += (lastPoiPos.y - currPoiPos.y) * viewbox.scale;

      lastPointerPosition.set(poiId, {
        x: currPoiPos.x,
        y: currPoiPos.y,
      });
    });

    viewbox.minX += panX / lastPointerPosition.size;
    viewbox.minY += panY / lastPointerPosition.size;
  }, 50);

  const resetZoom = (
    graphWidth: number | undefined,
    graphHeight: number | undefined
  ): void => {
    const scaleX = graphWidth ? graphWidth / svgWidth.value : 1;
    const scaleY = graphHeight ? graphHeight / svgHeight.value : 1;

    viewbox.scale = Math.max(scaleX, scaleY);
    viewbox.minX = 0;
    viewbox.minY = 0;
  };

  const viewBox_str = computed<string>(() => {
    return [
      viewbox.minX,
      viewbox.minY,
      svgWidth.value * viewbox.scale,
      svgHeight.value * viewbox.scale,
    ].join(" ");
  });

  return {
    viewbox,
    wheelEvent,
    pointerDownEvent,
    pointerMoveEvent,
    pointerUpEvent,
    pointerCancelEvent,
    resetZoom,
    viewBox_str,
  };
}
