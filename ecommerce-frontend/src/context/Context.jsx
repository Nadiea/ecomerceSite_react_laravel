import {  createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
    const [category, setCategory] = useState([]);

    const value = { category, setCategory };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}
