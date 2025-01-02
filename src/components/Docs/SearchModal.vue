<template>
  <v-overlay
    v-model="searchStore.isOpen"
    close-on-back
    persistent
    class="flex justify-center mt-[125px]"
  >
    <v-card
      class="flex flex-col justify-center w-[300px] sm:w-[550px] mx-auto p-4"
      v-click-outside="searchStore.toggle"
    >
      <v-text-field
        v-model="input"
        @input="fetchDocs"
        placeholder="Search for documentation"
        outlined
        dense
      ></v-text-field>

      <div v-if="items.length" class="results">
        <NuxtLink
          @click="handleItemClick"
          v-for="item in items"
          :to="item.id"
          :key="item.id"
        >
          <v-list-item>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.id }}
            </v-list-item-subtitle>
          </v-list-item>
        </NuxtLink>
      </div>

      <div v-else class="text-center pb-4">No results found</div>
    </v-card>
  </v-overlay>
</template>

<script lang="ts" setup>
import { useSearchStore } from "~/store/search";

const searchStore = useSearchStore();
const input = ref("");
const items = ref<ISearch[]>([]);
interface ISearch {
  id: string;
  content: string;
  match: Record<string, string[]>;
  queryTerms: string[];
  terms: string[];
  title: string;
  titles: string[];
}

const fetchDocs = async () => {
  if (!input.value.trim()) {
    items.value = [];
    return;
  }
  try {
    const results = await searchContent(input.value);
    const { value } = results;

    const uniqueResults = value.filter((item, index, self) => {
      const noDuplicate =
        index ===
        self.findIndex(
          (t) =>
            t.id === item.id ||
            JSON.stringify(t.titles) === JSON.stringify(item.titles)
        );
      const strictMatch =
        item.content.toLowerCase().includes(input.value.toLowerCase()) || item.title.toLowerCase().includes(input.value.toLowerCase());
      return noDuplicate && strictMatch;
    });

    items.value = uniqueResults as any[];
  } catch (error) {
    console.error("Error fetching documentation:", error);
  }
};

const handleItemClick = () => {
  searchStore.toggle();
};

onMounted(() => {
  fetchDocs();
});
</script>

<style scoped>
.results {
  max-height: 200px;
  overflow-y: auto;
}
</style>
