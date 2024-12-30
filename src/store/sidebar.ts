import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebarStore", {
  state: () => ({
    isOpen: true,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
