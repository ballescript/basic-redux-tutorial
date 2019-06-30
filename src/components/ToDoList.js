import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

const ToDoList = ({ toDos, onToDoClick }) => (
    <ul>
        {toDos.map((toDo, index) => (
            <ToDo key={index} {...toDo} onClick={() => onToDoClick(index)} />
        ))}
    </ul>
)

ToDoList.propTypes = {
    toDos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onToDoClick: PropTypes.func.isRequired
}

export default ToDoList;