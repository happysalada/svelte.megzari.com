import posts from './_posts.js'

const lookup = new Map()
posts.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post))
})

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const { slug } = params

  if (lookup.has(slug)) {
    return {
      body: lookup.get(slug),
    }
  }
}
