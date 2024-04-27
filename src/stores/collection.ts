import type { ApiResponse, ArtObject } from '@/model/models'
import { defineStore } from 'pinia'

// https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&involvedMaker=Rembrandt+van+Rijn

export const useCollectionStore = defineStore('collection', {
  state: () => ({
    collection: [] as ArtObject[]
  }),
  getters: {
    getCollection: (state): ArtObject[] => state.collection
  },
  actions: {
    async fetchCollection(author: string, offset: number) {
      const authorName = author.replace(' ', '+')
      const itemsPerPage = 12

      try {
        const response = await fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=PQcAbIlL&involvedMaker=${authorName}&ps=${itemsPerPage}&p=${offset}`)
        const data = await response.json()
        console.log(data)
        this.collection = [...this.collection, ...(data  as unknown as ApiResponse).artObjects]
      } catch (e) {
        console.error(e)
      }
    }
  }
})
