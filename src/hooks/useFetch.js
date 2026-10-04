import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
    
          const res = await fetch(url);
          const data = await res.json();
    
          setData(data);
          setLoading(false);
        }
    
        fetchData();
    }, []);

    return { data, setData, loading };
}
