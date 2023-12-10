<template>
  <div class="month-container">
    <h2>{{ monthName || "durp" }}</h2>
    <div class="task-cards-container">
      <slot></slot> <!-- Used to insert TaskCard components -->
    </div>
  </div>
</template>
<script>
export default {
  name:'month-group',
  props: {
    monthName: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
/* MonthGroup.vue */
.month-container {
  margin: 20px 0;
  padding: 10px;
  background: #f5f5f5; /* Example background color */
  border-radius: 8px; /* Example border-radius */
}

.month-container h2 {
  margin-bottom: 15px;
  color: #333; /* Example text color */
  font-size: 1.5rem;
}

.task-cards-container {
  margin-top: 10px;
}

</style>
