<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  url: { type: String, required: true },
  label: { type: String },
  enableHover: { type: Boolean },
})

const hovered = ref(false)

const handleMouseOver = () => {
  hovered.value = true
}

const handleMouseOut = () => {
  hovered.value = false
}
</script>

<template>
  <div class="image-container" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <img :src="url" />
    <div v-if="enableHover" class="image-veil" :class="{ 'hovered-class': hovered }">
      <slot name="label" />
    </div>
  </div>
</template>

<style scoped>
.image-container {
  order: 1;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
}

.image-veil {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: height var(--transition-smooth);
  bottom: 0;
  cursor: pointer;
  color: var(--stone-300);
}

.image-veil > * {
  transition: opacity var(--transition-smooth);
  transition-delay: 100ms;
  opacity: 0;
}

.image-veil.hovered-class {
  height: 100%;
}

.image-veil.hovered-class > * {
  opacity: 1;
}

.image-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
