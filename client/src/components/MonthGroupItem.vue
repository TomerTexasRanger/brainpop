<template>
  <div class="task-card">
    <h3>{{ activity.title }}</h3>
    <p>{{ activity.date }}</p>
    <span v-if="activity.score">Score: {{ activity.score }}/{{ activity.possibleScore }}</span>
    <button @click="viewWork">View work</button>
  </div>
</template>

<script>
export default {
  name: 'month-group-item',
  props: {
    activity: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewWork() {
      this.$emit('view-work', this.activity);
    }
  }
};
</script>

<style scoped>
/* TaskCard.vue */
.task-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Example box shadow */
  border-radius: 4px;
}

.task-card:hover {
  background: #e9e9e9; /* Slight background change on hover */
}

/* Other elements inside the TaskCard */
.task-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

/* ... */
</style>
