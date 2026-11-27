import { useState, useEffect } from "react";

function useFetch(urls) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const result = await Promise.all(
                    urls.map(async (url) => {
                        const response = await fetch(url);

                        if (!response.ok) {
                            throw new Error("Error: Failed to fetch data...")
                        }
                        return response.json();
                    })
                );
                setData(result);
            }
            catch (err) {
                setError("Error: Failed to fetch");
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [urls]);

    return { data, loading, error };
}

export default useFetch;