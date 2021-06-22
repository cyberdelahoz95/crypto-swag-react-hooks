import {useState, useEffect} from 'react';

const useCryptos = (API_URL, page) => {
    const [cryptos, setCryptos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}${page}`)
        .then((res) => res.json())
        .then((data) => {
            setCryptos(data);
            setIsLoading(false);
        });
    }, [API_URL, page]);
    return [cryptos, isLoading]
}

export default useCryptos