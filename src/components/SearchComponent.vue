<script setup lang="ts">
import { ref } from 'vue'
import { useCollectionStore } from '@/stores/collection'

// Using collection store (slice or some kind)
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
    <input type="text" v-model="searchValue" @keydown.enter="handleOnClick" />
    <button class="primary large" @click="handleOnClick">Search</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);
}

input {
  appearance: none;
  border: 0;
  flex-grow: 1;
  height: 48px;
  outline: 0 none transparent;
  font-size: var(--text-lg);
  border-radius: 8px;
  padding-left: var(--spacing-md);
  transition: box-shadow var(--transition-fast);
}

input:hover {
  box-shadow: 0 0 0 1px var(--color-input-border-hover);
}

input:focus, input:focus-visible {
  box-shadow: 0 0 0 2px var(--color-input-border-hover), 0 0 0 4px var(--color-input-box-shadow-hover);
}
</style>
