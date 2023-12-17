<template>
  <button @click="btnAction" class="base-btn" :class=btnClass :style=btnStyle>
    <i :class=buttonIcon></i>
    <small>{{ text }}</small>
  </button>
</template>
<script>
export default {
  name: 'base-button',
  props: {
    text: {
      type: String,
      default: () => 'Click'
    },
    buttonIcon: {
      type: String,
      default: () => ''
    },
    btnClass: {
      type: Object,
      default: () => {
      }
    },
    btnStyle: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    btnAction() {
      this.$emit('btn-action', this.text)
    }
  },
}
</script>

<style scoped>
.base-btn {
  color: var(--turquoise);
  display: flex;
  align-items: flex-start;
  gap: 3px;
  font-weight: 200;
  background-color: white;
white-space: nowrap;
}

.base-btn.active,
.base-btn:hover {
  background-color: var(--search-button-active);
  border-color: var(--turquoise);
}

.with-border {
  border: 2px solid var(--turquoise) !important;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
}

</style>
