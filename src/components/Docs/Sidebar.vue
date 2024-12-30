<template>
  <v-navigation-drawer v-model="sidebarStore.isOpen" color="background">
    <v-skeleton-loader
      v-if="!mdDocs.length"
      type="list-item-two-line"
      :height="'50px'"
    />

    <v-list v-if="mdDocs.length">
      <v-list-item link :to="Routes.docs" @click.stop>
        Introduction
      </v-list-item>
      <v-list-group
        v-for="(nav, index) in mdDocs"
        :key="index"
        v-model="nav.isOpen"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            {{ nav.title }}
          </v-list-item>
        </template>
        <v-list-item
          v-for="child in nav.children"
          :key="child.title"
          :to="child._path"
          link
        >
          {{ child.title }}
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import type { NavItem } from "@nuxt/content";
import { useSidebarStore } from "~/store/sidebar";
const sidebarStore = useSidebarStore();

const mdDocs = ref<NavItem[]>([]);

const fetchDocs = async () => {
  const { data: navigation } = await useAsyncData("navigation", () =>
    fetchContentNavigation()
  );
  const filtered = navigation
    .value!.filter((nav) => nav._path.includes("docs"))
    .map((nav) => nav.children)[0] as NavItem[];
  mdDocs.value = toRaw(filtered).filter((nav) => nav._path !== "/docs");
  mdDocs.value.forEach((nav) => {
    nav.isOpen = false;
  });
};

onMounted(() => {
  fetchDocs();
});
</script>

<style></style>
