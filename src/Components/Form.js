import { useState } from 'react';

import TodoCard from './TodoCard'


import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteAllCompletedTodos } from '../Redux/actions/todoActions';

// import { todosReducer } from '../Redux/reducers/todoReducer';


const Form = () => {

    const [newTodo, setNewTodo] = useState({ title: '', description: '' })



    //how to access any form of state inside any component
    //Problem: state is not changing and app is not rerendering
    const { todos } = useSelector((state) => state.todos)

    const dispatch = useDispatch();

    const remainingTodos = todos?.filter((todo) => !todo.completed)


    const handleInput = ({ target }) => {
        const { name, value } = target;

        setNewTodo((prev) => ({ ...prev, [name]: value }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo({ title: "", description: "" });
    };


    return (
        <div className="form__container">
            <div className="form__left">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="form__group">
                            <input
                                type="input"
                                name="title"
                                className="form__input"
                                placeholder="What needs to be done"
                                onChange={handleInput}
                                value={newTodo.title}
                                required
                                maxLength="30"
                            ></input>
                        </div>
                        {newTodo.title ? (
                            <div className="form__group">
                                <textarea
                                    name="description"
                                    className="form__input"
                                    placeholder="Details.."
                                    value={newTodo.description}
                                    onChange={handleInput}
                                />
                            </div>
                        ) : null}

                        <div className="form__group">
                            <button className="btn" type="submit">
                                Add Todo
                            </button>
                        </div>
                    </form>

                    <div className="form__remaining">
                        <p>Remaining Todos: {remainingTodos.length}</p>
                    </div>

                    <div className="form__buttons">
                        <button
                            className="btn"
                            type="submit"
                            onClick={() => dispatch(deleteAllCompletedTodos())}
                        >
                            Delete all compleated
                        </button>
                    </div>
                </div>
            </div>

            <div className="form__right">
                {todos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default Form;
