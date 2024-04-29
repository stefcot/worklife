/**
 * Builds a collection request URL for the Rijksmuseum API.
 *
 * @param {string} searchValue - The search value for filtering by the involved maker.
 * @param {number} itemsPerPage - The number of items to retrieve per page.
 * @param {number} offset - The offset of the items to retrieve.
 * @param {string} culture - The language used in results. Accepts 'ln' or 'en', defaults to 'en'
 *
 * @returns {string} - The collection request URL.
 */
export const buildCollectionRequest = (searchValue: string, itemsPerPage: number, offset: number, culture = 'en'): string => {
  const URI = `https://www.rijksmuseum.nl/api/${culture}/collection` +
  `?key=${import.meta.env.VITE_API_KEY}` +  // Your API-key, mandatory for every request.
  `&q=${searchValue}` +                     // Object needs to be made by this agent.
  '&imgonly=true' +                         // Only give results for which an image is available or not
  `&ps=${itemsPerPage}` +                   // The number of results per page.
  `&p=${offset}`                            // The result page. Note that p * ps cannot exceed 10,000.

  return URI;
}

/**
 * Builds the details request URI for the Rijksmuseum API.
 *
 * @param {string} objectNumber - The identifier of the object (case-sensitive).
 * @param {string} [culture='en'] - The culture to retrieve details in (defaults to 'en').
 *
 * @returns {string} The details request URI.
 */
export const buidDetailsRequest = (objectNumber:string, culture = 'en'): string => {
  const URI = `https://www.rijksmuseum.nl/api/${culture}/collection` +
    `/${objectNumber}` +                      // The identifier of the object (case-sensitive)
    `?key=${import.meta.env.VITE_API_KEY}`    // Your API-key, mandatory for every request.

  return URI;
}