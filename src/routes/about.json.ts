import projects from './_projects'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export function get() {
  return {
    body: JSON.stringify(projects),
  }
}
