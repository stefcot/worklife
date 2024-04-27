<script setup lang="ts">
import ModalComponent from '@/components/ModalComponent.vue'

import type { ArtObject } from '@/model/models'

import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useFavoritesStore } from '@/stores/favorites'
import { useCollectionStore } from '@/stores/collection'

const router = useRouter()

// Using cars store (slice ore somme kind)
const collectionStore = useCollectionStore()
// Setting all store state properties as reactive refs
const { getCollection } = storeToRefs(collectionStore)
// Getting actions
const { fetchCollection } = collectionStore

// Using favorites store (slice ore somme kind)
const store = useFavoritesStore()
const { addToFavorites, removeFromFavorites, isFavorite } = store

// State properties
const isModalOpened = ref(false)
const selectedArtObject = ref<ArtObject>()
const collection = ref(getCollection)

const openModal = (artObject: ArtObject) => {
  isModalOpened.value = true
  selectedArtObject.value = artObject
}

const closeModal = () => {
  isModalOpened.value = false
}

const submitHandler = () => {
  router.push({ name: 'detail', params: { id: selectedArtObject?.value?.id || '' } })
}

const addArtObjectToFavorites = () => {
  console.log(isFavorite(selectedArtObject?.value?.id as string))
  if (isFavorite(selectedArtObject?.value?.id as string)) removeFromFavorites(selectedArtObject?.value?.id as string)
  else addToFavorites(selectedArtObject?.value?.id  as string)
}

onMounted(() => {
  console.log('GalleryComponent::onMounted')
  fetchCollection('', 1)
})
console.log('GalleryComponent')
</script>

<template>
  <ul>
    <li v-for="artObject in collection" :key="artObject.id" @click="openModal(artObject)">
      <img :src="artObject.webImage.url">
      {{ artObject.title }}
    </li>
  </ul>
  <ModalComponent
    :isOpen="isModalOpened"
    :favoriteId="selectedArtObject?.id"
    @modal-close="closeModal"
    name="cars-modal"
  >
    <template #header>{{ selectedArtObject?.title }}</template>
    <template #content
      >{{ selectedArtObject?.longTitle }}
      <button class="primary" name="like" @click.stop="addArtObjectToFavorites">
        <span v-if="selectedArtObject?.id && isFavorite(selectedArtObject?.id)">DisLike</span>
        <span v-else>Like</span>
      </button>
    </template>
    <template #footer><button class="primary" name="submit" @click="submitHandler()">Go To</button></template>
  </ModalComponent>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 8px;
  width: 100%;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: #E2E8F0;
  padding: 16px;
  border-radius: 8px;
}
</style>
