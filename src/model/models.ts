type Image = {
  guid: string
  offsetPercentageX: number
  offsetPercentageY: number
  width: number
  height: number
  url: string
}

export type ArtObject = {
  links: {
    self: string
    web: string
  },
  id: string
  objectNumber: string
  title: string
  hasImage: boolean
  principalOrFirstMaker:string
  longTitle: string
  showImage: boolean
  permitDownload: boolean
  webImage: Image
  headerImage: Image
  productionPlaces: string[]
}

export type ApiResponse = {
  artObjects: ArtObject[],
  count: number
}

/*
{
            "links": {
                "self": "http://www.rijksmuseum.nl/api/nl/collection/SK-A-4691",
                "web": "http://www.rijksmuseum.nl/nl/collectie/SK-A-4691"
            },
            "id": "nl-SK-A-4691",
            "objectNumber": "SK-A-4691",
            "title": "Zelfportret",
            "hasImage": true,
            "principalOrFirstMaker": "Rembrandt van Rijn",
            "longTitle": "Zelfportret, Rembrandt van Rijn, ca. 1628",
            "showImage": true,
            "permitDownload": true,
            "webImage": {
                "guid": "89de22aa-e19f-4c83-87ff-26dd8f319c05",
                "offsetPercentageX": 0,
                "offsetPercentageY": 0,
                "width": 2118,
                "height": 2598,
                "url": "https://lh3.googleusercontent.com/7qzT0pbclLB7y3fdS1GxzMnV7m3gD3gWnhlquhFaJSn6gNOvMmTUAX3wVlTzhMXIs8kM9IH8AsjHNVTs8em3XQI6uMY=s0"
            },
            "headerImage": {
                "guid": "99061015-b788-42ed-a9d8-06db0bcf39e3",
                "offsetPercentageX": 0,
                "offsetPercentageY": 0,
                "width": 1920,
                "height": 460,
                "url": "https://lh3.googleusercontent.com/WKIxue0nAIOYj00nGVoO4DTP9rU2na0qat5eoIuQTf6Fbp4mHHm-wbCes1Oo6K_6IdMl6Z_OCjGW_juCCf_jvQqaKw=s0"
            },
            "productionPlaces": []
        },
        {
            "links": {
                "self": "http://www.rijksmuseum.nl/api/nl/collection/SK-A-5033",
                "web": "http://www.rijksmuseum.nl/nl/collectie/SK-A-5033"
            },
            "id": "nl-SK-A-5033",
            "objectNumber": "SK-A-5033",
            "title": "Marten Soolmans",
            "hasImage": true,
            "principalOrFirstMaker": "Rembrandt van Rijn",
            "longTitle": "Marten Soolmans, Rembrandt van Rijn, 1634",
            "showImage": true,
            "permitDownload": true,
            "webImage": {
                "guid": "974d1c9c-befa-4e1a-9926-ebd7f89557b5",
                "offsetPercentageX": 0,
                "offsetPercentageY": 0,
                "width": 4757,
                "height": 7485,
                "url": "https://lh3.googleusercontent.com/hDN8_JS4BbbksBXkxIDUldJvooejHBfQjgD3b_Jr73HjVOAs8thpnvCJA3WUtQFxlbjx-QB1-IyqhgEiM4dFLFk1Sg=s0"
            },
            "headerImage": {
                "guid": "e6a28349-49ae-4c69-a971-ad8836936a1d",
                "offsetPercentageX": 0,
                "offsetPercentageY": 0,
                "width": 1920,
                "height": 460,
                "url": "https://lh3.googleusercontent.com/smzena2yZjz8hCuzMNaAYbvFXqqPN-vSvs-ryFKz2KsNAzVdXm4kfLbK9PrpwI2f9eCO44PNIbBYv18HaufxMsHYqg=s0"
            },
            "productionPlaces": [
                "Amsterdam"
            ]
        },
 */
