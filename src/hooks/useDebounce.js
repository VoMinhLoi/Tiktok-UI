import { useEffect, useState } from 'react';
function useDebounce(value, delay) {
    const [debounceValue, setDebounce] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debounceValue;
}

export default useDebounce;
