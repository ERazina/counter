import React, { useState } from 'react';

function Result () {

    const [result, setResult] = useState(0);

    return (
        <div className="result">
            {result}
        </div>
    );
}

export default Result;