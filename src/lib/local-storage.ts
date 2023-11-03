type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

const id = 'KateGonch';

export function getItem<T>(name: string): T | null {
  const str = localStorage.getItem(`${id}.${name}`);

  if (!str) {
    return null;
  }

  try {
    return JSON.parse(str) as T;
  } catch {
    return null;
  }
}

export function setItem(name: string, value: JSONValue) {
  const str = JSON.stringify(value);
  localStorage.setItem(`${id}.${name}`, str);
}
