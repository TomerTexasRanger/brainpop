<template>
  <div class="card-heading">
    <slot name="mainTitle"></slot>
    <slot name="secTitle"></slot>
  </div>
</template>

<script>
export default {
  name: 'base-card-title',
};

</script>

<style>
.card-heading {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.4rem;
}

</style>
