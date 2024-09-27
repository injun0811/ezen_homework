import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data);
            setError(null);
        } catch (err) {
            setData(null);
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, loading, error };
};