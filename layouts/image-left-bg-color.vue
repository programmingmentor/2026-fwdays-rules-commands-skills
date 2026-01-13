<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "./layoutHelper";

type Props = {
  image?: string;
  class?: string;
  backgroundSize?: string;
  bgColor?: string;
};

const props = withDefaults(defineProps<Props>(), {
  backgroundSize: "cover",
  bgColor: "white",
});

const style = computed(() => {
  const bgStyle = handleBackground(props.image, false, props.backgroundSize);
  return {
    ...bgStyle,
    backgroundColor: props.bgColor, // Apply the custom background color
  };
});
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div class="w-full h-full" :style="style" />
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
  </div>
</template>
