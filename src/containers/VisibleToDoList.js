import { connect } from 'react-redux';
import { toggleToDo } from '../actions';
import ToDoList from '../components/ToDoList';

const getVisibleToDos = (toDos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return toDos;
        case 'SHOW_COMPLETED':
            return toDos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return toDos.filter(t => !t.completed);
    }
}

const mapStateToProps = state => {
    return {
        toDos: getVisibleToDos(state.toDos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToDoClick: id => {
            dispatch(toggleToDo(id))
        }
    }
}

const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)

export default VisibleToDoList;