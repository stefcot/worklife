<script setup lang="ts">
import CloseIcon from '@/assets/svg/close.svg'

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['modal-close'])
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> default header </slot>
          <button class="secondary" @click.stop="emit('modal-close')"><CloseIcon/></button>
        </div>
        <div class="modal-body">
          <slot name="content"> default content </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"> </slot>
          <div>
            <button class="secondary" @click.stop="emit('modal-close')">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  width: 300px;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: rgba(0, 0, 0, 0.7);
}
</style>
