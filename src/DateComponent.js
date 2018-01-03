import React from 'react';

import dateFormat from 'date-fns/format';

export default () => (
    <p className="hello">
        Hoje é {dateFormat(new Date(), 'DD/MM/YYYY')}
    </p>
)