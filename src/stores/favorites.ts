import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as String[]
  }),
  getters: {
    carsLikeStore: (state) => state.favorites,
    isFavorite: (state) => (favoriteId: String) => !!state.favorites.find((id) => id === favoriteId)
  },
  actions: {
    addToFavorites(favoriteId: String) {
      this.favorites.push(favoriteId)
    },
    removeFromFavorites(favoriteId: String) {
      const index = this.favorites.indexOf(favoriteId)
      if (index > -1) {
        this.favorites.splice(index, 1)
      }
    }
  }
})
