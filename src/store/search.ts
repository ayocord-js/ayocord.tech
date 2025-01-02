import { defineStore } from 'pinia'

export const useSearchStore = defineStore({
  id: 'searchStore',
  state: () => ({ 
    isOpen: false
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
})
