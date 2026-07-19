export interface GalleryItem {
  image: string
  caption: string
  detail: string
}

export const galleryItems: GalleryItem[] = [
  {
    image: 'gallery/vit-cm-trophy.jpg',
    caption: "Chief Minister's Trophy 2024",
    detail: 'Gold medal, Volleyball (Men) — District Level, VIT',
  },
  {
    image: 'gallery/licet-volleyball.jpg',
    caption: 'LICET Sports Day',
    detail: 'Winner, inter-departmental Volleyball',
  },
  {
    image: 'gallery/hackwarts-hackathon.jpg',
    caption: 'Hackwarts Hackathon',
    detail: 'Organizer — Xplore 2023 Symposium, LICET',
  },
  {
    image: 'gallery/praestantia-stockistai.jpg',
    caption: 'Praestantia 2023',
    detail: 'Winner, Idea Presentation — pitched StockistAI',
  },
]
