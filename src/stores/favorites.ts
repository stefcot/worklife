import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as string[],
  }),
  getters: {
    getFavorites: (state): string[] => state.favorites,
    isFavorite: (state) => (favoriteId: string): boolean => !!state.favorites.find((id) => id === favoriteId),
  },
  actions: {
    addToFavorites(favoriteId: string) {
      this.favorites.push(favoriteId)
    },
    removeFromFavorites(favoriteId: string) {
      const index = this.favorites.indexOf(favoriteId)
      if (index > -1) {
        this.favorites.splice(index, 1)
      }
    },
  },
})
