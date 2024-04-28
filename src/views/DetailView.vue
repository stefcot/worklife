<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useFavoritesStore } from '@/stores/favorites'
import { useCollectionStore } from '@/stores/collection'

import type { ArtObject } from '@/model/models'
import {storeToRefs} from 'pinia';

const route = useRoute()
const router = useRouter()

const paramsId = ref<string>(route.params.id as string)
const artObject = ref<ArtObject>()

// Using collection store (slice or some kind)
const collectionStore = useCollectionStore()

// Setting all store state properties as reactive refs
const { collection } = storeToRefs(collectionStore)

// Using favorites store (slice or some kind)
const favoritesStore = useFavoritesStore()
const { isFavorite } = favoritesStore

artObject.value = collection.value.find((item) => {
  return item.id === route.params.id
})
</script>

<template>
  <h1 v-if="artObject">Title {{ artObject.title }}</h1>
  <h2 v-if="isFavorite(paramsId)">❤️</h2>
  <button name="back" @click.stop="router.go(-1)">Go Back</button>
</template>

<style scoped>

</style>
