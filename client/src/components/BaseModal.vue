<template>
  <div class="modal-overlay">
    <div class="modal-content">
    <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'base-modal',
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px!important;
}

.modal-content {
  width: 60vw;
  height: 30vw;
  background: white;
  border-radius: 20px;
}

@media (max-width: 992px) {
  .modal-overlay{
    font-size: 25px!important;
  }
  .modal-content {
    width: 80%;
    height: 50%;
    background: white;
    padding: 0.1rem 0.5rem 1rem;
    border-radius: 20px;
  }
}
</style>
