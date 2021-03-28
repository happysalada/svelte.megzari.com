import posts from './_posts'

const lookup = new Map()
posts.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post))
})

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params: {slug} }: {params: {slug: String}}) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  if (lookup.has(slug)) {
    return {
      body: lookup.get(slug),
    }
  }
}
