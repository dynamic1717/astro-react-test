import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      title: z.string(),
      featured: z.boolean(),
      image: image(),
    }),
})

export const collections = {
  posts: postsCollection,
}
