import type { HandleServerError } from '@sveltejs/kit';
import { extract_log_params } from '$lib/utils';

export const handleError: HandleServerError = async ({ error, event }) => {
  const errorId = crypto.randomUUID();

  event.locals.error = error?.toString() || undefined;
  //@ts-ignore
  event.locals.errorStackTrace = error?.stack || undefined;
  event.locals.errorId = errorId;
  let status = error?.toString()?.includes("Not found") ? 404 : 500;
  let req_params = extract_log_params({ status }, event);
  const message = status == 404 ? 'Page not found' : 'An unexpected error occurred.';
  console.error({ ...req_params, message });

  return {
    message,
    errorId
  };
};
