import posts from './_posts.js'

const body = JSON.stringify(
  posts.map(({ title, outline, tags, slug }) => {
    return { title, outline, tags, slug }
  })
)

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export function get() {
  return {
    body,
  }
}
