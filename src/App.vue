<script setup lang="ts">
import HeaderSection from "./components/HeaderSection.vue";
import LearningContentCard from "./components/LearningContentCard.vue";
import FooterSection from "./components/FooterSection.vue";
import { ref } from "vue";
import { DATABASE } from "./data";

const learningContents = ref(DATABASE);
</script>

<template>
  <HeaderSection />
  <LearningContentCard
    v-for="learningContent of learningContents"
    :key="learningContent.url"
    :title="learningContent.title"
    :author="learningContent.author"
    :url="learningContent.url"
    :summary="learningContent.summary"
    :rating="learningContent.rating"
    :thoughts="learningContent.thoughts"
    :date="learningContent.date"
  />
  <FooterSection />
</template>

<style scoped></style>
