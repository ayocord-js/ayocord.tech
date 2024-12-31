<template>
  <ContentNavigation v-slot="{ navigation }">
    <v-navigation-drawer v-model="sidebarStore.isOpen" color="background">
      <v-list>
        <v-list-item link :to="Routes.docs" @click.stop>
          Introduction
        </v-list-item>
        <v-list-group
          v-for="(nav, index) in filterDocs(navigation)"
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
  </ContentNavigation>
</template>

<script lang="ts" setup>
import type { NavItem } from "@nuxt/content";
import { useSidebarStore } from "~/store/sidebar";
const sidebarStore = useSidebarStore();

const filterDocs = (navigation: NavItem[]) => {
  const filtred = navigation
    .filter((nav) => nav._path.includes("docs"))
    .map((nav) => nav.children)[0];
  return filtred?.filter((nav) => nav._path !== "/docs");
};
</script>

<style></style>
