<template>
  <v-app-bar class="opacity-90 text-text" color="#6584FF" elevation="0">
    <div class="flex sticky w-full items-center max-w-[90%] justify-between">
      <div class="flex items-center gap-[20px]">
        <v-btn
          @click="sidebardStore.toggle"
          width="50"
          height="50"
          icon="mdi-menu"
          color="white"
        ></v-btn>
        <NuxtLink
          class="hidden md:block flex items-center text-text gap-4"
          :to="Routes.main"
        >
          <IconsLogo width="65" />
        </NuxtLink>
        <NuxtLink
          class="hidden md:block"
          v-for="item in items"
          :to="item.url"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div>
        <DocsSearch />
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useSidebarStore } from "~/store/sidebar";

const sidebardStore = useSidebarStore();
const items = [
  {
    name: "Overview",
    url: Routes.docs,
    external: false,
  },
  {
    name: "Source",
    url: Routes.source,
    external: true,
  },
];
</script>

<style></style>
