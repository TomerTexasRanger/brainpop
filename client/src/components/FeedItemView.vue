<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <button class="close-modal-btn" @click="closeModal">
        <i class="fa fa-times-circle-o"></i>
      </button>

      <div class="modal-icon">
        <div :class=card.product class="icon-background">
          <img alt="sd" :src=card.topicData.iconPath>
        </div>
      </div>
      <div class="modal-heading">
        <div>
          <h3>{{ card.displayTitle }}</h3>
        </div>
        <small>{{card.createdDate.toLocaleString('en-US',{month:'short', day: '2-digit',year:'numeric',hour: 'numeric'})}}</small>
      </div>
      <div class="modal-comment">
        <p>{{ card.comment }}</p>
      </div>
      <div class="modal-data" v-if="card.hasScore">
        <span>Score</span>
        <span class="card-data-score">{{ card.score }}/{{card.possibleScore }}</span>
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
  height: 50%;
  background: white;
  padding: 0.1rem 0.5rem 1rem;
  border-radius: 20px;
  border: 4px solid var(--container-outline);
  display: flex;
  flex-direction: column;
}

.close-modal-btn {
  align-self: flex-end;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--border-gray-light);
  border: none;
  background-color: transparent;
}

.modal-data {
  color: var(--turquoise);
  font-size: 0.8rem;
  padding: 0 1rem;
  display: flex;
  gap: 0.3rem;
}

.modal-comment {
  align-self: flex-start;
  flex-grow: 1;
  font-size: 1rem;
  padding: 0 1rem;

}
.modal-icon {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.8rem;
}
.icon-background {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 10%;
  padding: 0.5rem;
}
.modal-icon img {
  width: 100%;
}

.modal-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.modal-heading h3 {
  font-weight: 600;
  font-size: 1rem;
}
.card-data-score{
  font-weight: 500;
}
.modal-heading small {
  color: var(--font-gray-light);
  font-size: 0.7rem;
}
</style>
