import React, { useMemo, useState } from "react";
import './header.scss';

const Heading = ({text}) => {
    const [state, setState] = useState(1);

    const person = {
        name: 'hitesh',
        age: 22
    };


    const value = useMemo(() => {
        console.log('recomputed');
        return state;
    }, [person]);

    return <h3 className='header' onClick={() => setState(state + 1)}>{text}:{value}</h3>;
};

export default Heading;