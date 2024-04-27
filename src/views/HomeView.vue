<script setup lang="ts">
import CarsGalerieComponent from '@/components/GalleryComponent.vue'
import Wifi from '@/assets/svg/wifi.svg'

console.log('HomeView')
</script>

<template>
  <main>
    <h1>Hello</h1>
    <Wifi style="stroke: #E2E8F0; fill: none; width: 64px" />
    <CarsGalerieComponent />
  </main>
</template>
