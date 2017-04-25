import React from 'react';

export const Todo = (props) => <div>{props.completed ? <del>props.text</del> : props.text}</div>;