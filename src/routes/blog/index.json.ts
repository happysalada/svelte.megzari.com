const posts = import.meta.glob('./*.svx')

interface Post {
  title: string;
  outline: string;
  tags: {
    name: string;
    link: string;
  }[];
  slug: string;
}

let body: Post[] = []

for (const path in posts) {
  posts[path]().then((post: {metadata: Post}) => {
    body.push(post.metadata)
  })
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export function get() {
  return {
    body: JSON.stringify(body),
  }
}
