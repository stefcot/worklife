<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

// Stores
import { useCollectionStore } from '@/stores/collection'
import { useFavoritesStore } from '@/stores/favorites'

import type { ArtObject } from '@/model/models'
import ImageComponent from '@/components/ImageComponent.vue'

// Router features
const route = useRoute()
const router = useRouter()

// Using collection store (slice or some kind)
const collectionStore = useCollectionStore()
const { getArtObjectDetails, getFetching } = storeToRefs(collectionStore)

// Setting all store state properties as reactive refs
const { getDetails } = collectionStore

// Using favorites store (slice or some kind)
const favoritesStore = useFavoritesStore()
const { addToFavorites, removeFromFavorites, isFavorite } = favoritesStore

// Setting all store state properties as reactive refs
const { collection } = storeToRefs(collectionStore)

const getArtObjectFromId = (id: string): ArtObject | undefined => collection.value.find((item) => {
  return item.id === id
})

const toggleFavorites = (id?: string) => {
  if(!id) return

  if (isFavorite(id)) {
    removeFromFavorites(id)
  }
  else {
    addToFavorites(id)
  }
}

onMounted(() => {
  const objectNumber = getArtObjectFromId(route.params.id as string)?.objectNumber
  if (objectNumber) getDetails(objectNumber)
})
</script>

<template>
  <div class="root">
    <nav>
      <button class="primary" @click.stop="router.go(-1)">Go Back</button>
    </nav>
    <div v-if="getFetching" class="loading">Loading...</div>
    <div v-else class="content">
      <div class="image">
        <ImageComponent v-if="getArtObjectDetails.webImage" :url="getArtObjectDetails.webImage.url" />
      </div>
      <div class="information">
        <h1>{{ getArtObjectDetails.title }}<span v-if="getArtObjectDetails.dating"> - {{ getArtObjectDetails.dating.presentingDate }}</span></h1>
        <p v-if="getArtObjectDetails.plaqueDescriptionEnglish">{{ getArtObjectDetails.plaqueDescriptionEnglish }}</p>
        <div class="categories">
          <span :key="tag.toString()" v-for="tag in getArtObjectDetails.tags" class="tag">{{ tag.toString() }}</span>
        </div>
        <button class="secondary floating-button" name="like" @click.stop="toggleFavorites(getArtObjectDetails.id)">
          <span v-if="getArtObjectDetails.id && isFavorite(getArtObjectDetails.id)">Remove from favorites</span>
          <span v-else>Add to favorites</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md)
}

.image {
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--vt-c-white);
  border-radius: var(--spacing-sm);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.information {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md)
}

.floating-button {
  position: absolute;
  left: var(--spacing-md);
  bottom: var(--spacing-md);
  width: calc(100% - (var(--spacing-md) * 2));
}

@media (--pad) {
  .content {
    flex-direction: row;
  }

  .image {
    width: 400px;
  }
}

@media (--laptop) {
  .floating-button {
    position: static;
    left: unset;
    bottom: unset;
    width: auto;
  }
}

@media (--desktop) {

}
</style>