import React from "react";


export const GlobalContext = React.createContext();



export const GlobalStorage = ({ children }) => {
    const [region, setRegion] = React.useState(null)
    const [data, setData] = React.useState([])

    return <GlobalContext.Provider value={{ region, data, setData, setRegion}}>{children}</GlobalContext.Provider>
}