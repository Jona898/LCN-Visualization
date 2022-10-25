import { computed, reactive, type ComputedRef } from "vue";

export function useSvgViewBoxZoom(
  svgWidth: ComputedRef<number>,
  svgHeight: ComputedRef<number>
) {
  const MIN_SCALE = 0.1;
  const MAX_SCALE = 12;
  const SCROLL_CHANGE_AMMOUNT = 0.002;

  const viewbox = reactive<{
    scale: number;
    minX: number;
    minY: number;
  }>({ scale: 1, minX: 0, minY: 0 });

  const wheelEvent = (wheelEv: WheelEvent): void => {
    const { offsetX, offsetY, deltaY } = wheelEv;

    const lastScale = viewbox.scale;

    viewbox.scale *= 1 + deltaY * SCROLL_CHANGE_AMMOUNT;
    if (viewbox.scale < MIN_SCALE) viewbox.scale = MIN_SCALE;
    else if (viewbox.scale > MAX_SCALE) viewbox.scale = MAX_SCALE;

    viewbox.minX = viewbox.minX - offsetX * viewbox.scale + offsetX * lastScale;
    viewbox.minY = viewbox.minY - offsetY * viewbox.scale + offsetY * lastScale;
  };

  const lastPosition = reactive<{ x: number; y: number }>({ x: 0, y: 0 });

  const mouseDownEvent = (ev: MouseEvent) => {
    lastPosition.x = ev.offsetX;
    lastPosition.y = ev.offsetY;
  };

  const mouseMoveEvent = (ev: MouseEvent) => {
    // Left Mouse Button equals 1
    if (ev.buttons == 1) {
      viewbox.minX += (lastPosition.x - ev.offsetX) * viewbox.scale;
      viewbox.minY += (lastPosition.y - ev.offsetY) * viewbox.scale;

      lastPosition.x = ev.offsetX;
      lastPosition.y = ev.offsetY;
    }
  };

  const resetZoom = (
    width: number | undefined,
    height: number | undefined
  ): void => {
    const scaleX = width ? width / svgWidth.value : 1;
    const scaleY = height ? height / svgHeight.value : 1;

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
    mouseDownEvent,
    mouseMoveEvent,
    resetZoom,
    viewBox_str,
  };
}
