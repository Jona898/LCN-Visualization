import type { InjectionKey, Ref } from "vue";

export const selectedNodeKey = Symbol() as InjectionKey<Ref<string>>;

export const changeSelectedNodeKey = Symbol() as InjectionKey<
  (newSelect: string) => void
>;
