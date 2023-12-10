<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <button class="close-modal-btn" @click="closeModal">
        <i class="far fa-times-circle"></i>
      </button>

      <div class="modal-icon">
        <div :class=card.product class="icon-background">
          <img alt="sd" :src=card.topic_data.icon_path>
        </div>
      </div>
      <div class="modal-heading">
        <div>
          <h3>{{ card.topic_data.name }} {{ card.resource_type }}</h3>
        </div>
        <small>{{ new Date(card.d_created * 1000).toDateString() }}</small>
      </div>
      <div class="modal-comment">
        <p>{{ card.comment }}</p>
      </div>
      <div class="modal-data" v-if="card.score">Score: {{ card.score }}/{{
          card.possible_score
        }}
      </div>
    </div>

  </div>
</template>

<script>
export default {

  name: 'feed-item-view',
  props: {
    card: {
      type: Object,
      default: () => ({}),
      required: false
    },
  },
  data() {
    return {
      // isVisible: false,
    };
  },

  computed: {
    isVisible() {
      return !!this.card;
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  },
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
}

.modal-content {
  width: 40%;
  height: 40%;
  background: white;
  padding: 10px 30px 15px;
  border-radius: 5px;
  border: 4px solid var(--container-outline);
  display: flex;
  flex-direction: column;
//justify-content: space-between; align-items: center;
}

.close-modal-btn {
  align-self: flex-end;
  font-size: 2rem;
  cursor: pointer;
  color: var(--months);
  border: none;
  background-color: transparent;
}

.modal-data {
  color: var(--search-button);
  align-self: flex-start;
}

.modal-comment {
  align-self: flex-start;
  flex-grow: 1;
  font-size: 1.2rem;
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

.modal-heading {
  display: flex;
  flex-direction: column;
//justify-content: space-around; gap: 0.7rem; flex-grow: 1; align-items: center;


}

.modal-heading h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.modal-heading small {
  color: var(--months);
}

.modal-icon {
  margin-bottom: 0.8rem;
}


.modal-content img {
  width: 40px;
}
</style>
