<script setup lang="ts">
// It would be nice to just use LearningContent instead. Maybe some advanced TS usage I don't know of yet.
const props = defineProps({
  title: { type: String, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  rating: { type: Number, required: true }, // Should be enum
  thoughts: { type: String, required: true },
  date: { type: Date, required: true },
});
</script>

<template>
  <div>
    <div>{{ props.title }}</div>
    <div>{{ props.author }}</div>
    <a :href="props.url">
      {{ props.url }}
    </a>
    <div>{{ props.summary }}</div>
    <div>{{ props.rating }} / 5</div>
    <div>{{ props.thoughts }}</div>
    <div>{{ props.date.toString() }}</div>
  </div>
</template>

<style scoped></style>
