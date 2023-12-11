<template>
  <div class="group-container">
    <h3>{{ groupName || "durp" }}</h3>
    <div class="cards-container">
      <div v-for="(card, index) in group" :key="card.id" class="card-div">
        <div class="line-through"></div>
        <base-card
          :card="card"
          @card-action="handleGroupCardAction" @set-hidden="handleGroupCardSetHidden"></base-card>
        <div v-if="index === group.length - 1 && !lastIndex" class="line-through"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: 'base-group',
  components: {BaseCard},
  props: {
    groupName: {
      type: String,
      required: true
    },
    group: {
      type: Array,
      required: true
    },
    lastIndex: {
      type: Boolean
    }

  },
  methods: {
    handleGroupCardAction(card) {
      this.$emit('group-card-action', card);
    },
    handleGroupCardSetHidden(id) {
      this.$emit('group-card-set-hidden', id);
    }
  },

};
</script>
<style scoped>
.line-through::after {
  content: "";
  line-height: 100%;
  margin: 0;
  width: 2px;
  margin-inline-start: 3rem;
  border-inline-end: 0.1rem solid var(--border-gray-light);
}

.group-container h3 {
  background-color: var(--background-gray-light);
  border-radius: 20px;
  padding: 0.2rem 1rem;
  width: fit-content;
}
</style>
