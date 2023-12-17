<template>
  <div class="card-icon">
    <div :class=iconClass class="icon-background">
      <img v-if="src" class="card-icon-img" :alt=alt :src=src>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'base-card-icon',
  components: {},
  props: {
    src: {
      type: String,
      default: () => ({}),
      required: false
    },
    iconClass: {
      type: Object,
      default: () => ({})
    },
    alt: {
      type: String,
      default: () => ''
    },
  },
};
</script>

<style scoped>
.card-icon {
  max-width: 100%;

}

.icon-background {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: fit-content;
  padding: 0.5rem;
  position: relative;
}

.card-icon-img {
  width: 100%;
}

.bp {
  background-color: var(--light-turquoise);
}

.bpjr {
  background-color: var(--yellow);
}
</style>
