type FetchParams = Parameters<typeof window.fetch>;

export const useApi = async (...params: FetchParams): Promise<any> => {
  try {
    const response = await fetch(...params);
    const data = await response.json();
    return { data };
  } catch (err) {
    console.log(err);
  }
};
