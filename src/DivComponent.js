import React from 'react';

import _join from 'lodash/join';

export default () => {
    const text = _join(['Olá', 'webpack', '!!!'], ' ');

    return (
        <div className="hello">
            {text}
        </div>
    )
}