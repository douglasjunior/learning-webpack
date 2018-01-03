import React, { PureComponent } from 'react';

import _join from 'lodash/join';

export default class DivComponent extends PureComponent {

    render() {
        const text = _join(['Olá', 'webpack', '!!!'], ' ');

        return (
            <div className="hello">
                {text}
            </div>
        )
    }

}