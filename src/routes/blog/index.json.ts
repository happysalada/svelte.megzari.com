import posts from './_posts'

interface Post {
  title: string;
  outline: string;
  tags: {
    name: string;
    link: string;
  }[];
  slug: string;
}

const body = JSON.stringify(
  posts.map(({ title, outline, tags, slug }: Post) => {
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
