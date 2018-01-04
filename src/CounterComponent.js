import React, { PureComponent } from 'react';

export default class CounterComponent extends PureComponent {

    state = {
        counter: 0
    }

    componentDidMount(){
        this.counterInterval = setInterval(this._onCount, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.counterInterval);
    }

    _onCount = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        const { counter } = this.state;

        return (
            <p>Counter {counter}</p>
        )
    }
}