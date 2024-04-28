<script setup lang="ts">
import ImageComponent from '@/components/ImageComponent.vue'

defineProps({
  imageUrl: String,
  title: String,
  description: String,
})

</script>

<template>
  <div class="root">
    <div class="image">
      <ImageComponent v-if="imageUrl" :url="imageUrl" />
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.image {
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

@media (--pad) {
  .root {
    flex-direction: row;
  }


  .image {
    width: 300px;
  }
}

@media (--laptop) {
  .image {
    width: 300px;
  }
}

@media (--desktop) {
  .image {
    width: 300px;
  }
}
</style>