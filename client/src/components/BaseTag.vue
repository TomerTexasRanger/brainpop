<template>
  <div class="base-tag">
    <div :class=tagClass class="tag-background">
      <small class="bp-font-bold bp-font-sm">{{ text }}</small>
    </div>
  </div>
</template>
<script>
export default {
  name: 'base-tag',
  components: {},
  props: {
    tagClass: {
      type: Object,
      default: () => ({})
    },
    text: {
      type: String,
      default: () => ''
    }
  },
};
</script>

<style scoped>
.base-tag {
  position: absolute;
  bottom: 0;
  right: 0;
}

.tag-background {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 0.8;
}
small {
  color: #6e3f17;
}

.bg-yellow {
  background-color: #fecd63;
}
</style>
