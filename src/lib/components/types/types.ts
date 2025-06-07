type Item = {
  collectionId: string
  collectionName: string
  created: string
  icon: string
  id: string
  tag_category: string
  tag_name: string
  tag_type: string
  updated: string
}

type Section = {
  title: string
  data: Item[] 
}

type LineupItem = {
  collectionId: string
  collectionName: string
  id: string
  title: string
  type: string
  link: string
  link_on: boolean 
  detail: string
  detail_on: string
}

type LineupSection = {
  title: string
  data: LineupItem
}

export type { Item, Section, LineupItem, LineupSection }
