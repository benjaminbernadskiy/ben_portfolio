<template>
  <div
    class="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
    :style="{
      background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    }"
  ></div>
</template>

<script setup>
import { useMouse } from "@vueuse/core";
const { x, y } = useMouse();
</script>
