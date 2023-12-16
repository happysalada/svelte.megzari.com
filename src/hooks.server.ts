import type { HandleServerError } from '@sveltejs/kit';
import { extract_log_params } from '$lib/utils';

export const handleError: HandleServerError = async ({ error, event, status, message }) => {
  const errorId = crypto.randomUUID();

  event.locals.error = error?.toString() || undefined;
  //@ts-ignore
  event.locals.errorStackTrace = error?.stack || undefined;
  event.locals.errorId = errorId;
  let req_params = extract_log_params({ status }, event);
  console.error({ ...req_params, message });

  return {
    message,
    errorId
  };
};
