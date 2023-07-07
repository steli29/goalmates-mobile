import { useEffect, useState } from 'react';

/**
 * Debounces the given value by delay milliseconds.
 * Default delay is 1000 milliseconds or 0.5 second.
 * @param {value}
 * @param {delay}
 * @returns {debouncedValue}
 */
const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce