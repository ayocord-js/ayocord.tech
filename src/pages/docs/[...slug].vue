<template>
  <NuxtLayout class="text-text" name="documentation">
    <ContentDoc :doc="doc" class="prose"></ContentDoc>
  </NuxtLayout>
  <NuxtPage />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const doc = ref<any>();

async function fetchDoc() {
  const slug = route.params.slug;
  const params = slug
    ? (slug as string[]).map((key) => key + "/").join("")
    : null;
  const { data } = await useAsyncData(() =>
    queryContent(`/docs${params ? "/" + params : ""}`).findOne()
  );
  doc.value = data;
}

onMounted(() => {
  fetchDoc();
});
</script>

<style scoped>
.not-found {
  text-align: center;
  font-size: 1.25rem;
  color: var(--error-color, red);
}
</style>
