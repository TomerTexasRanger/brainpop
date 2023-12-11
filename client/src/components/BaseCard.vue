<template>
  <div class="card">

    <div :class="{'hidden-card': hidden}" class="card-content" >
      <div class="card-icon">
        <div :class=card.product class="icon-background">
          <img class="card-icon-img" :alt=card.displayTitle :src=card.topicData.iconPath>
        </div>
      </div>
      <div class="card-heading">
          <h4>{{ card.displayTitle }}</h4>
        <small>{{card.createdDate.toLocaleString('en-US',{month:'short', day: '2-digit',year:'numeric',hour: 'numeric'})}}</small>
      </div>
      <div class="card-data" v-if="card.hasScore">
        <span>Score</span>
        <span class="card-data-score">{{ card.score }}/{{card.possibleScore }}</span>
      </div>
      <button v-if="card.hasZoom" class="action-btn" @click="handleZoom">
        <i class="fa fa-eye" style="font-size:100%"></i>

        <span>View work</span>
      </button>

    </div>
    <button @click="setHidden" class="card-hide-icon"><i :class="{'fa fa-eye-slash' : !hidden, 'fa fa-eye': hidden}"></i>
    </button>
    <div class="hidden-icon" v-if="hidden">
      <img alt="hidden icon" src="@/assets/brain-pop-guy.png">
    </div>
  </div>

</template>

<script>
export default {
  name: 'base-card',
data(){
  return {
    hidden: false
  };
},
  props: {
    card: {
      type: Object,
      default: () => ({}),
      required: false
    },
  },
  methods: {
    handleZoom() {
      this.$emit('card-action', this.card);
    },
    setHidden(){
      this.card['hidden'] = !this.hidden;
      this.hidden = !this.hidden
    }
  },
};
</script>

<style scoped>

.card {
  display: flex;
  border: 0.09rem solid var(--border-gray-light);
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  position: relative;

}

.card-content {
  padding: 1rem 0.4rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-data {
  color: var(--turquoise);
  font-size: 0.8rem;
  font-weight: 400;
  display: flex;
  gap: 0.3rem;
}
.card-data .card-data-score{
  font-weight: 600;
}

.action-btn {
  color: var(--turquoise);
  display: flex;
  gap: 0.2rem;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;

}
.card-heading {
  flex-grow: 1;
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.4rem;
}

.card-heading small {
  color: var(--font-gray-light);
  font-size: 0.7rem;
}

.card-icon {
  margin-bottom: 0.8rem;
  max-width: 6%;
}

.icon-background {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: fit-content;
  padding: 0.5rem;

}

.card-icon-img {
  width: 100%;
}

.card-hide-icon {
  display: flex;
  justify-content: flex-end;
  font-size: 0.7rem;
}

.hidden-icon {
  position: absolute;
  width: 4rem;
  left: 50%;
}

.hidden-icon img {
  width: 100%;
}
.hidden-card{
  background-color: transparent;
  pointer-events: none;
  filter: blur(5px);
}

</style>
