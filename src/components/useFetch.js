import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
         fetch(url, { signal: abortCont.signal })
             .then(res => {
                 if(!res.ok) {
                     throw Error('Could not fetch data');
                 }
                 return res.json();
             })
             .then(data => {
                 setError(null);
                 setData(data);
             })
             .catch(err => {
                 if (err.name === 'AbortError'){
                     console.log('fetch aborted')
                 } else {
                 setError(err.message);
                 }
             })
        return () => abortCont.abort();
     }, [url]); //used with authentication, useEffect runs with every render unless you tell it otherwise

     return { data, error }
}

export default useFetch;