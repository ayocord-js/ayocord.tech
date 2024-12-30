<template>
  <v-app>
    <DocsHeader class="uppercase sticky" />
    <DocsSidebar />
    <DocsMarkDown>
      <slot />
    </DocsMarkDown>
  </v-app>
</template>

<script lang="ts" setup></script>

<style></style>
