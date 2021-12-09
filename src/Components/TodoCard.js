import { FormControlLabel } from '@mui/material';

import { CheckBox } from '@material-ui/icons';
import { DeleteForever } from "@material-ui/icons";



import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../Redux/actions/todoActions";


const TodoCard = ({ todo }) => {

    const dispatch = useDispatch();


    const todoTime = new Date(parseInt(todo.time)).toDateString()





    return (
        <div
            className="todoCard"
            key={todo.id}
            style={todo.completed ? { backgroundColor: "#b4ffa8" } : { backgroundColor: "#ffffffc9" }}
        >
            <div className="todoCard__check">
                <FormControlLabel
                    label={'card'}
                    control={
                        <CheckBox
                            onClick={() => dispatch(completeTodo(todo.id))}
                            name='checked'
                            color='primary'
                        />
                    }
                />
            </div>

            <div className="todoCard__todoContainer">
                <div className="todoCard__time">
                    {todoTime}
                    <div className="todoCard__title">
                        <h2>{todo.todo.title}</h2>
                    </div>

                    <div className="todoCard__text">
                        <p>{todo.todo.description ? todo.todo.description : null}</p>
                    </div>


                </div>

                <div className="todoCard__delete">
                    <DeleteForever
                        style={{ fontSize: '35px' }}
                        onClick={() => dispatch(removeTodo(todo.id))}
                    />
                </div>
            </div>
        </div>
    );
}

export default TodoCard;


