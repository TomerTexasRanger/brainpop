<template>
  <div class="card">

    <div :class="{'hidden-card': hidden}" class="card-content" >
      <div class="card-icon">
        <div :class=card.product class="icon-background">
          <img class="card-icon-img" :alt=card.displayTitle :src=card.topicData.iconPath>
        </div>
      </div>
      <div class="card-heading">
        <div>
          <h3>{{ card.displayTitle }}</h3>
        </div>
        <small>{{card.createdDate}}</small>
      </div>
      <div class="card-data" v-if="card.score">Score: {{ card.score }}/{{
          card.possibleScore
        }}
      </div>
      <button class="action-btn" @click="handleAction">
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
    handleAction() {
      this.$emit('card-action', this.card);
    },
    setHidden(){
      this.card['hidden'] = !this.hidden;
      // this.$emit('set-hidden', this.card.id);

      this.hidden = !this.hidden
    }
  },




};
</script>

<style scoped>

.card {
  display: flex;
  background: white;
  border: 0.2rem solid var(--container-outline);
  border-radius: 6px;
  padding: 0.8%;
  position: relative;

}

.card-content {
  padding: 1% 1% 1%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-data {
  color: var(--search-button);
}

.action-btn {
  border: none;
  background-color: transparent;
  color: var(--search-button);
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  cursor: pointer;
}


.bp {
  background-color: var(--search-button);
}

.bpjr {
  background-color: #f6b80d;
}

.card-heading {

  flex-grow: 1;
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.7rem;


}

.card-heading small {
  color: var(--months);
}

.card-icon {
  margin-bottom: 0.8rem;
  max-width: 5%;

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
  font-size: 1rem;
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
