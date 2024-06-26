<script setup lang="ts">

import ModalComponent from '@/components/ModalComponent.vue'
import ImageComponent from '@/components/ImageComponent.vue'
import ArtObjectModalContentComponent from '@/components/ArtObjectModalContentComponent.vue'
import ToggleFavoritesComponent from '@/components/ToggleFavoritesComponent.vue'

import HeartIcon from '@/assets/svg/heart.svg'
import FilledHeartIcon from '@/assets/svg/filed-heart.svg'

import type { ArtObject } from '@/model/models'

import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useFavoritesStore } from '@/stores/favorites'
import { useCollectionStore } from '@/stores/collection'

const router = useRouter()

// Using collection store (slice or some kind)
const collectionStore = useCollectionStore()
// Setting all store state properties as reactive refs
const { getCollection, getItemsPerPage, getFetching } = storeToRefs(collectionStore)
// Getting actions
const { fetchCollection } = collectionStore

// Using favorites store (slice or some kind)
const store = useFavoritesStore()
const { isFavorite } = store

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

const gotoDetails = () => {
  router.push({ name: 'detail', params: { id: selectedArtObject?.value?.id || '' } })
}

// Call the fetch collection action by default if no collection has been searched yet
onMounted(() => {
  if(collection.value.length === 0) fetchCollection('')
})
</script>

<template>
  <ul>
    <li v-for="artObject in collection" :key="artObject.id" @click="openModal(artObject)">
      <h3>{{ artObject.title }}</h3>
      <ImageComponent v-if="artObject.webImage" :url="artObject.webImage.url" label="Toggle favorite" enableHover>
        <template #label>
          <span class="toggle-favorite-label">
            Toggle favorite
            <span v-if="isFavorite(artObject.id)"><FilledHeartIcon class="heart-icon" /></span>
            <span v-else><HeartIcon class="heart-icon" /></span
          ></span>
        </template>
      </ImageComponent>
    </li>
    <template v-if="getFetching">
      <li v-for="n in getItemsPerPage" :key="n" class="skeleton" :class="{'fake-height': collection.length === 0}" />
    </template>
  </ul>
  <ModalComponent
    :isOpen="isModalOpened"
    :favoriteId="selectedArtObject?.id"
    @modal-close="closeModal"
    name="art-object-modal"
  >
    <template #content
      ><ArtObjectModalContentComponent :image-url="selectedArtObject?.webImage.url" :title="selectedArtObject?.title" :description="selectedArtObject?.longTitle" />
    </template>
    <template #footer
      >
      <ToggleFavoritesComponent :favorite-id="selectedArtObject?.id" />
      <button class="primary" @click="gotoDetails()">View details</button>
    </template
    >
  </ModalComponent>
</template>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap-lg);
  width: 100%;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 16px;
  background: var(--vt-c-white);
  border-radius: var(--spacing-sm);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: var(--spacing-sm);
}

li.skeleton {
  animation: skeleton-loading 1s infinite;
}

li.skeleton.fake-height {
  padding-bottom: 110%;
}

@keyframes skeleton-loading {
  0% {
    opacity: .8;
  }
  50% {
    opacity: .25;
  }
  100% {
    opacity: .8;
  }
}

li h3 {
  order: 2;
  font-weight: 500;
  font-style: italic;
  color: var(--slate-600);
}

.heart-icon {
  width: 24px;
  fill: var(--stone-300);
}

.toggle-favorite-label {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--stone-300);
}

.toggle-favorite-label span {
  height: 24px;
}

@media (--laptop) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (--desktop) {
  ul {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
