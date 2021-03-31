import {useState, useEffect} from 'react';

export default function useStateWithLocalStorage (localStorageKey, defaultVal) {
    const [value, setValue] = useState(
        JSON.parse(window.localStorage.getItem(localStorageKey)) || defaultVal
    );
    
    useEffect(() => {
      window.localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value, localStorageKey]);

    return [value, setValue];
  };