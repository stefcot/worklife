<script setup lang="ts">
import CloseIcon from '@/assets/svg/close.svg'

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['modal-close'])
</script>

<template>
  <div v-if="isOpen" class="modal-veil" @click.stop="emit('modal-close')">
    <div class="modal-container">
      <CloseIcon @click.stop="emit('modal-close')" class="close-icon"/>
      <div class="modal-body">
        <slot name="content" />
      </div>
      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-veil {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: var(--spacing-lg);
}

.modal-container {
  position: relative;
  width: 100%;
  background-color: var(--stone-50);
  border-radius: var(--rounded-sm);
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
}

.close-icon {
  position: absolute;
  width: 24px;
  fill: var(--stone-800);
  top: var(--spacing-md);
  right: var(--spacing-md);
  cursor: pointer;
}

.modal-body {
  padding: 0 var(--spacing-xl);
}

footer {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg) var(--spacing-xl) 0;
  gap: var(--spacing-md);
}

@media (--desktop) {
  .modal-veil {
    align-items: center;
  }

  .modal-container {
    width: 800px;
  }

  footer {
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>
