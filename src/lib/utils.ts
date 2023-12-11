export const extract_log_params = ({ status }: { status: number }, event: any) => {
  const level = status == 404 ? 'warning' : ((status >= 500) ? 'error' : 'info');
  const error = event?.locals?.error || undefined;
  const errorId = event?.locals?.errorId || undefined;
  const errorStackTrace = event?.locals?.errorStackTrace || undefined;
  // doesn't work with prerendering
  // const urlParams = Object.fromEntries(event?.url?.searchParams);

  let referer = event.request.headers.get('referer');
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const refererHostname = refererUrl.hostname;
      if (refererHostname === 'localhost' || refererHostname.includes('brocop.com')) {
        referer = refererUrl.pathname;
      }
    } catch (e) {
      // url is not in the shape of https:// or http:// so just keep as is
    }
  } else {
    referer = undefined;
  }

  return {
    method: event.request.method,
    path: event.url.pathname,
    status,
    timeInMs: Date.now() - event?.locals?.startTimer,
    level,
    ...(event.locals?.user ? { user: event.locals.user.email } : {}),
    ...(event.locals?.user_id ? { user_id: event.locals.user_id } : {}),
    ...(error ? { error } : {}),
    ...(errorId ? { errorId } : {}),
    ...(errorStackTrace ? { errorStackTrace } : {}),
    // ...(Object.keys(urlParams).length !== 0 ? { urlParams } : {}),
    ...(referer ? { referer } : {})
  }
}
