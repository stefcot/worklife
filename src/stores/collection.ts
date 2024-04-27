import type { ApiResponse, ArtObject } from '@/model/models'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { buildCollectionRequest } from '@/utils/request'

// For some reason, all the values from 1 to 10, are valid, after 10 only dozens values are accepted:
// for instance, if 15 is provided then a pagination of 20 results is returned.
export const useCollectionStore = defineStore('collection', {
  state: () => ({
    collection: [] as ArtObject[],
    itemsPerPage: 10,
    fetching: false,
    offset: 1,
    searchValue: '',
    totalCount: 0,
  }),
  getters: {
    getCollection: (state): ArtObject[] => state.collection,
    getItemsPerPage: (state): number => state.itemsPerPage,
    getFetching: (state): boolean => state.fetching,
    getOffset: (state): number => state.offset,
    getSearchValue: (state): string => state.searchValue,
    getTotalCount: (state): number => state.totalCount,
  },
  actions: {
    async fetchCollection(author: string) {
      this.offset = 1
      this.searchValue = author.trim().replace(/ /g, '+')
      this.fetching = true

      try {
        const response = await fetch(
          buildCollectionRequest(this.searchValue, this.itemsPerPage, this.offset),
        )
        const data = await response.json()
        this.collection = [...(data as unknown as ApiResponse).artObjects]
        this.totalCount = (data as unknown as ApiResponse).count
        this.fetching = false
      } catch (e) {
        this.fetching = false
        console.error(e)
      }
    },
    async fetchMore() {
      this.offset++
      this.fetching = true

      try {
        const response = await fetch(
          buildCollectionRequest(this.searchValue, this.itemsPerPage, this.offset),
        )
        const data = await response.json()
        this.collection = [...this.collection, ...(data as unknown as ApiResponse).artObjects]
        this.fetching = false
      } catch (e) {
        this.fetching = false
        console.error(e)
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCollectionStore, import.meta.hot))
}
