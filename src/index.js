import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import './styles.scss';

import DivComponent from './DivComponent';
import DateComponent from './DateComponent';
import ButtonComponent from './ButtonComponent';
import CounterComponent from './CounterComponent';
import ImgComponent from './ImgComponent';

class App extends PureComponent {
    render() {
        return (
            <div>
                <DivComponent />
                <DateComponent />
                <ButtonComponent />
                <CounterComponent />
                <ImgComponent />
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));
