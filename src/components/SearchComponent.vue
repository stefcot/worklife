<script setup lang="ts">
import { ref } from 'vue'
import { useCollectionStore } from '@/stores/collection'

// Using collection store (slice ore somme kind)
const collectionStore = useCollectionStore()

// Getting actions
const { fetchCollection } = collectionStore

// Two-way data binding with input (controlled)
const searchValue = ref('')

// Call the fetch collection action
const handleOnClick = () => {
  fetchCollection(searchValue.value)
}
</script>

<template>
  <div>
    <input type="text" v-model="searchValue" />
    <button class="primary" @click="handleOnClick">Search</button>
  </div>
</template>

<style scoped></style>
