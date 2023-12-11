<template>
  <div class="group-container">
    <h3>{{ groupName || "durp" }}</h3>
    <div class="cards-container">
      <div v-for="(card, index) in group" :key="card.id" class="card-div">
        <div class="line-through"></div>
        <base-card
          :card="card"
          @card-action="handleGroupCardAction" @set-hidden="handleGroupCardSetHidden"></base-card>
        <div v-if="index === group.length - 1 && !lastIndex" class="line-threw"></div>

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
.group-container {

}

.line-through ::after {
  content: "";
  line-height: 100%;
  margin: 0;
  width: 2px;
  margin-inline-start: 4rem;
  border-inline-end: 0.2rem solid var(--container-outline);
}

.group-container h3 {
  margin: 0;
  font-weight: 300;
  font-size: 1.2rem;
  background-color: #fcf8e5;
  border-radius: 20px;
  padding: 5px 20px;
  width: fit-content;
}
</style>
