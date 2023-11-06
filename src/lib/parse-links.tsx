export default function parse_link_header(header: string) {
  if (header.length === 0) {
    throw new Error('input must not be of zero length');
  }
  const parts = header.split(',');
  const links: { first: string; prev: string; next: string; last: string } = {
    first: '',
    prev: '',
    next: '',
    last: '',
  }; // TODO type
  parts.forEach((p) => {
    const section = p.split(';');
    if (section.length != 2) {
      throw new Error("section could not be split on ';'");
    }
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });

  return links;
}
