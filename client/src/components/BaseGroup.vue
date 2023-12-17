<template>
  <div class="group-container">
    <h2 class="bp-font-md bp-font-light">{{ groupName}}</h2>
    <div class="cards-container">
      <div v-for="(card, index) in group" :key="card.id">
        <div class="line-through"></div>
        <base-card :hidden="card.hidden" :card-vertical="screenWidth < 575"  class="card-div">
          <template #CardActionBtn>
            <base-button @btn-action="handleGroupCardSetHidden(card)" :text="''"
                         :btn-class="{'bp-text-dark': true}"
                         :button-icon="!card.hidden ?'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></base-button>
          </template>
          <template #cardIcon>
            <base-card-icon :src="card.topicData.iconPath" :alt="card.displayTitle"
                            :icon-class="{[card.product]: true}">
              <base-tag v-if="card.product === 'bpjr'" :tag-class="{'bg-yellow': true}"
                        :text="'jr.'"></base-tag>
            </base-card-icon>
          </template>
          <template #cardTitle>
            <base-card-title>
              <template #mainTitle><h3 class="bp-font-md bp-font-normal">{{
                  card.displayTitle
                }}</h3></template>
              <template #secTitle><small
                class="bp-font-light bp-font-sm">{{ card.createdDate | formatDate }}</small>
              </template>
            </base-card-title>
          </template>
          <template #cardData>
            <div v-if="card.hasScore"
               class="bp-text-turquoise bp-d-flex align-items-end bp-flex-gap-2">
            <span class="bp-font-md bp-font-light">Score</span>
            <span class="bp-font-bold bp-font-md">{{ card.score }}/{{ card.possibleScore }}</span>
          </div>
          </template>
          <template v-if="card.hasZoom" #cardAction>
            <base-button :btn-class="{'bp-font-lg bp-font-normal': true}" :text="'View work'"
                         :button-icon="'fa-regular fa-eye bp-font-xs'"
                         @btn-action="handleGroupCardAction(card)"></base-button>
          </template>
        </base-card>
        <div v-if="index === group.length - 1 && !lastIndex" class="line-through"></div>

      </div>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCardIcon from "@/components/BaseCardIcon.vue";
import BaseCardTitle from "@/components/BaseCardTitle.vue";
import BaseTag from "@/components/BaseTag.vue";

export default {
  name: 'base-group',
  components: {
    BaseTag, BaseButton, BaseCardTitle, BaseCardIcon, BaseCard
  },
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
    handleGroupCardSetHidden(card) {
      card.hidden = !card.hidden
    }
  },
  computed:{
    isMobile(){
      return window.innerWidth < 575
    }
  }

};
</script>
<style scoped>
.group-container h2 {
  background-color: var(--background-gray-light);
  border-radius: 20px;
  padding: 0.2rem 1rem;
  width: fit-content;
}
.card-div{
  min-height: 130px;
}
</style>
