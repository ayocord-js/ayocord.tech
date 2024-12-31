<template>
  <NuxtLayout class="text-text" name="documentation">
    <ContentDoc v-slot="{ doc }">
      <ContentRendererMarkdown :value="doc" class="prose" />
    </ContentDoc>
  </NuxtLayout>
  <NuxtPage />
</template>

<script lang="ts" setup></script>

<style scoped>
.not-found {
  text-align: center;
  font-size: 1.25rem;
  color: var(--error-color, red);
}
</style>
