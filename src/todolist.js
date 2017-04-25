import React from 'react';
import {Todo} from './todo'

export const TodoList = (props) => <div>
    <Todo completed={false}>Todo 1</Todo>
    <Todo completed={false}>Todo 2</Todo>
</div>;