export function isValidUrl(url) {
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9-._~%]+)\.([a-zA-Z]{2,})([\/a-zA-Z0-9-._~%!$&'()*+,;=:@]*)?(\?[a-zA-Z0-9-._~%!$&'()*+,;=:@\/?]*)?(#[a-zA-Z0-9-._~%!$&'()*+,;=:@\/?]*)?$/i;
  return urlRegex.test(url);
}
