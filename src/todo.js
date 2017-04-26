import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <span>
            <button onClick={(event) => {
                event.preventDefault();
                this.props.onToggleCompleted();
            }}>✔
            </button>
            {this.props.completed ? <del>{this.props.text}</del> : this.props.text}
        </span>
    }
}