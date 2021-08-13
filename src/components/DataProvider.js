import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'));
        if (todoStore) setTodos(todoStore);
    }, []);

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos));
    }, [todos]);

    return (
        <DataContext.Provider value={[todos, setTodos, checkAll, setCheckAll]}>
            {props.children}
        </DataContext.Provider>
    )
}
