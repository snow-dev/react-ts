
/** Import react section **/
import {useDispatch, useSelector} from "react-redux";
import React, { ReactElement, useState} from "react";

/** Import component section **/

/** Import helpers section **/
import * as actions from '../../store/todo/actions';
import { RootState } from "../../store/rootReducer";
import { createTodo } from "../../store/todo/actions";
import { Todo } from "../../store/todo/types";

/** Import resources section **/
import {Header, List, Item, Check} from "./styles";
import tick from '../../assets/tick.png';


export default function TodoComponent() : ReactElement {

    const data = useSelector((state: RootState) => state.todo.data);

    const dispatch = useDispatch();

    const [description, setDescription] = useState('');

    /**
     * Return the id of the last existing item
     */
    function lastId() : number {
        return  data[data.length - 1] ? data[data.length - 1 ].id + 1 : 1;
    }

    /**
     * Create a new task
     * @param e
     */
    function addTodo(e: React.MouseEvent<HTMLAnchorElement>) : void {
        e.preventDefault();

        dispatch(
            createTodo({
                id: lastId(),
                description,
                checked: false,
            })
        );
    }

    /**
     * Delete a todo.
     * @param todo
     * @param e
     */
    function handleDelete(todo: Todo, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) : void {
        e.stopPropagation();
        dispatch(actions.deleteTodo(todo));
    }

    /**
     * Mark as checked a todo.
     * @param todo
     * @param e
     */
    function handleUpdate(todo: Todo, e: React.MouseEvent<HTMLLIElement, MouseEvent>) : void {
        dispatch(actions.updateTodo({ ...todo, checked: !todo.checked }));
    }

    return (
        <div>
            <Header>
                <h2>To do list</h2>

                <div>
                    <input
                        value={description}
                        onChange={(e): void => setDescription(e.target.value)}
                        type="text"
                        id="myInput"
                        placeholder="Title..."
                    />
                    <a href="/" onClick={(e): void => addTodo(e)}>
                        Add
                    </a>
                </div>

            </Header>

            <List>
                {
                    data.map((todo, index) => (

                        <Item key={index}
                              checked={todo.checked}
                              onClick={(e) : void  => handleUpdate(todo, e)}
                        >

                            <div>
                                { todo.checked &&  <Check src={tick} alt="" /> }
                                <span>{todo.description}</span>
                            </div>

                            <button type="button" className="close" onClick={(e): void => handleDelete(todo, e)}>
                                X
                            </button>

                        </Item>
                    ))
                }

            </List>
        </div>
    );
}

