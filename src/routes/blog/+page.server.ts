
const posts = import.meta.glob('./*.svx')

let body = []

for (const path in posts) {
  body.push(posts[path]().then(({ metadata }) => metadata))
}
/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load() {
  const posts = await Promise.all(body)
  return {
    posts
  };
}
