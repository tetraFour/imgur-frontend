export const isEmpty = (object: Record<string, unknown>): boolean =>
  JSON.stringify(object) == JSON.stringify({});
