<script setup lang="ts">
// Using favorites store (slice or some kind)
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'

import FilledHeartIcon from '@/assets/svg/filed-heart.svg'
import HeartIcon from '@/assets/svg/heart.svg'

// Using favorites store (slice or some kind)
const favoritesStore = useFavoritesStore()
// Setting all store state properties as reactive refs
const { getFavorites } = storeToRefs(favoritesStore)

</script>

<template>
<span>
  {{ getFavorites.length.toString() }}
  <span v-if="getFavorites.length">
    <FilledHeartIcon class="heart-icon" />
  </span>
  <span v-else>
    <HeartIcon class="heart-icon" />
  </span>
</span>
</template>

<style scoped>
.heart-icon {
  width: 32px;
  fill: var(--stone-200);
}

span {
  display: flex;
  align-items: center;
  font-size: var(--text-2xl);
  gap: var(--gap-sm);
  color: var(--stone-200);
}
</style>