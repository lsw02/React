import React, {useState} from 'react';

const IterationSample = () => {
    const [name, SetName] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextName = name.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId+1);
        SetName(nextName);
        setInputText('');
    };

    const onRemove = id => {
        const nextName = name.filter(name => name.id !== id);
        SetName(nextName);
    }

    const nameList = name.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return(
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
}


export default IterationSample;