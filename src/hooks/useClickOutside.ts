import { ref, onMounted, onUnmounted, Ref } from "vue";

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handler, false);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handler, false);
  });
  return isClickOutside;
};
export default useClickOutSide;
