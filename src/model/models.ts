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

export type CollectionApiResponse = {
  artObjects: ArtObject[],
  count: number
}

type Maker =  {
  name: string,
  unFixedName: string,
  placeOfBirth: string,
  dateOfBirth: string, // 1606-07-15,
  dateOfBirthPrecision: null,
  dateOfDeath: string, // 1669-10-08,
  dateOfDeathPrecision: null,
  placeOfDeath: string,
  occupation: string[]
  roles: string[],
  nationality: string,
  biography: null,
  productionPlaces: string[],
  qualification: null,
  labelDesc: string,
}

export type DetailedArtObject = Partial<{
  id: string
  webImage: Image
  objectNumber: string
  title: string
  titles: string[]
  description: string
  principalMakers: Maker[]
  principalMaker: string,
  plaqueDescriptionEnglish: string,
  dating: {
    presentingDate: string,
    sortingDate: number,
    period: number,
    yearEarly: number,
    yearLate: number
  },
  hasImage: boolean,
  principalOrFirstMaker: string,
  longTitle: string,
  subTitle: string,
  scLabelLine: string,
  label: {
    title: string,
    makerLine: string,
    description: string,
    notes: string,
    date: string,
  },
  showImage: true
  tags?: any[]
}>

export type DetailsApiResponse = {
  artObject: DetailedArtObject
  artObjectPage: {
    tags: any[]
  }
}
