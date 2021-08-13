import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {
    const [todos, setTodos, , setCheckAll] = useContext(DataContext);

    const switchComplete = id => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete;
            }
        });
        switchCheckAllMatchCheckboxesState();
        setTodos(newTodos);
    };

    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.name = editvalue;
            }
        });
        setTodos(newTodos);
    };

    const countCheckedList = () => {
        const newTodos = [...todos];
        let count = 0;
        newTodos.forEach((todo) => {
            if (todo.complete) {
                count++;
            }
        });
        return count;
    };

    const switchCheckAllMatchCheckboxesState = () => {
        if (countCheckedList() === todos.length) {
            setCheckAll(true);
            return;
        }
        setCheckAll(false);
    };

    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                        checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
                ))
            }
        </ul>
    )
}
