<template>
  <div class="group-container">
    <h3>{{ groupName || "durp" }}</h3>
    <div class="cards-container">
      <div v-for="card in group" :key="card.id" class="card-div">
        <div class="line"></div>

        <base-card
          :card="card"
          @card-action="handleGroupCardAction"></base-card>
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
    }
  },
  methods: {
    handleGroupCardAction(card) {
      console.log(card);
      this.$emit('group-card-action', card);
    }
  },

};
</script>
<style scoped>
.group-container {

}

.line::after{
  content: "";
  line-height: 100%;
  margin: 0;
  width: 2px;
  margin-inline-start: 70px;
  border-inline-end: 2px solid var(--container-outline);
}
.group-container h3 {
  margin: 0;
  font-weight: normal;
  font-size: 1.3rem;
  background-color: #fcf8e5;
  border-radius: 20px;
  padding: 5px 20px;
  width: fit-content;
}
</style>
