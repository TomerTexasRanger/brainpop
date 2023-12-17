<template>
  <div class="card">
    <div class="bp-d-flex bp-justify-end">
      <slot name="CardActionBtn"></slot>
    </div>
    <div class="card-content" :class="{'card-vertical': cardVertical, 'card-horizontal': !cardVertical,'bp-hidden-content': hidden}">
      <div class="card-icon">
        <slot name="cardIcon"></slot>
      </div>
      <div class="card-title">
        <slot name="cardTitle"></slot>
      </div>
      <div class="card-data">
        <slot name="cardData"></slot>
      </div>
      <div class="card-action">
        <slot name="cardAction"></slot>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'base-card',
  props:{
    cardVertical:{
      type: Boolean,
      default: false
    },
    hidden:{
      type: Boolean,
      default: false
    }

  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 0.15em solid var(--border-gray-light);
  border-radius: 6px;
  padding: 0.4em 0.3em;
  position: relative;
  min-width: 100%;
  min-height: 100%;
}

.card-content {
  flex-grow: 1;
  display: flex;
  padding-inline-start: 1rem;
  padding-inline-end: 2rem;
  gap: 1.2rem;

}
.card-horizontal {
  align-items: center;
}

.card-vertical {
  flex-direction: column;
}

.card-horizontal .card-icon {
  width: 70px;
}
.card-vertical .card-icon{
  width: 90px;
  align-self: center;
}
.card-horizontal .card-title {
  flex-grow: 1;
}
.card-vertical .card-title{
  align-self: center;
  text-align: center;
}

.card-vertical .card-data {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.card-vertical .card-action {
  align-self: center;
}
@media (max-width: 575px) {
  .card-vertical .card-icon{
    width: 60px;
    align-self: center;
  }
}


</style>
