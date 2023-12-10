<template>
  <div class="card">
    <div class="card-icon">
      <div :class=card.product class="icon-background">
        <img alt="sd" :src=card.topic_data.icon_path>
      </div>
    </div>
    <div class="card-heading">
      <div>
        <h3>{{ card.topic_data.name }} {{card.resource_type}}</h3>
      </div>
      <small>{{ new Date(card.d_created * 1000).toDateString() }}</small>
    </div>
    <div class="card-data" v-if="card.score">Score: {{ card.score }}/{{ card.possible_score }}</div>
    <button class="action-btn" @click="handleAction"><i class="far fa-eye"></i>View work</button>
  </div>
</template>

<script>
export default {
  name: 'base-card',

  props: {
    card: {
      id: Number,
      resource_type: String,
      score: Number,
      possible_score: Number,
      product: String,
      d_created: String,
      topic_data: {
        name: String,
        icon_path: String
      },
      comment: String,
      required: true
    },
  },
  methods: {
    handleAction() {
      this.$emit('card-action', this.card);
    }
  },

};
</script>

<style scoped>

.card {
  display: flex;
  align-items: center;
//justify-content: space-between; padding: 2% 2% 2%;
  gap: 1rem;
//margin-bottom: 10px; background: white; border: 2px solid var(--container-outline); border-radius: 6px;
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
  gap: 2px;
  align-items: center;
  cursor: pointer;
}

.icon-background {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00a3f5;
  border-radius: 50%;
  width: 100%;
  padding: 0.5rem;

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

.card-heading h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}
.card-heading small{
  color: var(--months);
}
.card-icon {
  margin-bottom: 0.8rem;
}


.card img {
  width: 40px;
}

</style>
