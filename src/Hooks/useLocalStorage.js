import React from 'react'

export const useLocalStorage = (key, inicial) => {
    
    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key);

        return local ? local : inicial;
    })

    React.useEffect(() => {
        if(key !== undefined){
            window.localStorage.setItem(key, state);
        } 
    }, [state, key])
    
    return [state, setState]
}
