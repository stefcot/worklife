<script setup lang="ts">

// Using collection store (slice or some kind)
import { useCollectionStore } from '@/stores/collection'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// Using collection store (slice or some kind)
const collectionStore = useCollectionStore()
// Setting all store state properties as reactive refs
const { getItemsPerPage, getOffset, getTotalCount } = storeToRefs(collectionStore)
// Getting actions
const { fetchMore } = collectionStore

// State variables
const displayButton = computed<boolean>(() => getTotalCount.value > getItemsPerPage.value * getOffset.value)

// Call the fetch collection action
const handleOnClick = () => {
  fetchMore()
}
</script>

<template>
  <div>
    <button v-if="displayButton" class="primary large" @click="handleOnClick">Fetch more</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>