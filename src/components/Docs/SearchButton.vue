<template>
  <v-btn icon="mdi-magnify" @click="searchStore.toggle"></v-btn>
</template>

<script lang="ts" setup>
import { useSearchStore } from '~/store/search';

const searchStore = useSearchStore()
</script>

<style></style>
