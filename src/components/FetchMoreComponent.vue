<script setup lang="ts">

// Using collection store (slice ore somme kind)
import { useCollectionStore } from '@/stores/collection'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

// Using collection store (slice ore somme kind)
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
<button v-if="displayButton" class="primary" @click="handleOnClick">Fetch morhe</button>
</template>

<style scoped>

</style>