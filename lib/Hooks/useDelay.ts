export const useDelay = (ms: number): Promise<any> =>
  new Promise((resolve) => setTimeout(resolve, ms));
