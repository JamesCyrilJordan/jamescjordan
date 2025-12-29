import { useEffect, useState } from 'react';

const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export function useApiData(endpoint, fallback = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        const response = await fetch(`${apiBase}${endpoint}`);
        if (!response.ok) throw new Error('Request failed');
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        console.warn(`Falling back to static data for ${endpoint}`, error);
        if (isMounted) {
          setData(fallback);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [endpoint, fallback]);

  return { data, loading };
}
