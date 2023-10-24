type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

const id = 'url_redirect';

export class LocalStorage {
  public static getItem<T>(name: string): T | null {
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

  public static setItem(name: string, value: JSONValue) {
    const str = JSON.stringify(value);
    localStorage.setItem(`${id}.${name}`, str);
  }
}
