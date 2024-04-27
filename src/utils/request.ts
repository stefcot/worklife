/**
 * Builds a collection request URL for the Rijksmuseum API.
 *
 * @param {string} searchValue - The search value for filtering by the involved maker.
 * @param {number} itemsPerPage - The number of items to retrieve per page.
 * @param {number} offset - The offset of the items to retrieve.
 * @returns {string} - The collection request URL.
 */
export const buildCollectionRequest = (searchValue: string, itemsPerPage: number, offset: number) => {
  const URI = 'https://www.rijksmuseum.nl/api/nl/collection' +
  `?key=${import.meta.env.VITE_API_KEY}` +  // Your API-key, mandatory for every request.
  `&involvedMaker=${searchValue}` +         // Object needs to be made by this agent.
  '&imgonly=true' +                         // Only give results for which an image is available or not
  `&ps=${itemsPerPage}` +                   // The number of results per page.
  `&p=${offset}`                            // The result page. Note that p * ps cannot exceed 10,000.

  return URI;
}