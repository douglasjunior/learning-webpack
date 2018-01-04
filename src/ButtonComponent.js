import React, { PureComponent } from 'react';

export default class ButtonComponent extends PureComponent {

    state = {
        counter: 0
    }

    _onClick = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        const { counter } = this.state;

        return (
            <button onClick={this._onClick}>Clicks {counter}</button>
        )
    }
}