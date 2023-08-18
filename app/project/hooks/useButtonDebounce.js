import { useRef } from 'react';

export const useButtonDebounce = () => {
    const busy = useRef(false);
    const debounce = (callback, customBounceRate = 2000) => () => {
        setTimeout(() => {
            busy.current = false;
        }, customBounceRate);
        if (!busy.current) {
            busy.current = true;
            callback();
        }
    };

    return { debounce };
};