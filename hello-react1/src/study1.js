import React, {useState} from 'react';

const Study1 = () => {
    const [hello, setHello] = useState('fe study');
    const onClickHello = () => setHello('hi');
    const onClickBye = () => setHello('bye');

    const [color, setColor] = useState('black'); 

    return(
        <div>
            <button onClick={ onClickHello }>hi</button>
            <button onClick={ onClickBye }>bye</button>
            <h1 style={{ color }}>{hello}</h1>

            <button style={{ color:'red' }} onClick={()=>setColor('red')}>빨간색</button>
            <button style={{ color:'blue' }} onClick={()=>setColor('blue')}>파란색</button>
            <button style={{ color:'yellow' }} onClick={()=>setColor('yellow')}>노란색</button>
        </div>
        
    );
}

export default Study1