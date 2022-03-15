
interface GalleryImage {
  readonly original: string
  readonly thumbnail: string
  readonly description?: string
}

export default interface Gallery {
  readonly images: readonly GalleryImage[],
  readonly id: string
  readonly title: string,
  readonly subtitle?: string,
}
