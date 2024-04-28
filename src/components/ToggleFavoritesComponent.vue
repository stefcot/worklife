<script setup lang="ts">
defineProps({
  favoriteId: String,
  extraClass: String,
})

// Using favorites store (slice or some kind)
import { useFavoritesStore } from '@/stores/favorites'

const store = useFavoritesStore()
const { addToFavorites, removeFromFavorites, isFavorite } = store

const toggleFavorites = (id?: string) => {
  if(!id) return

  if (isFavorite(id)) {
    removeFromFavorites(id)
  }
  else {
    addToFavorites(id)
  }
}

</script>

<template>
  <button class="secondary" :class="extraClass" name="like" @click.stop="toggleFavorites(favoriteId)">
    <span v-if="favoriteId && isFavorite(favoriteId)">Remove from favorites</span>
    <span v-else>Add to favorites</span>
  </button>
</template>

<style scoped>

</style>