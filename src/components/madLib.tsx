import * as React from 'react';
import { Link } from "react-router-dom";

import '../App.css';


export interface Props {
    name: string,
    verb: string,
    noun: string,
    age: string,
    onUpdateValue: (field:string, value:any) => void,
    clearForm: () => void
       
}

const MadLib = ({name, verb, noun, age, onUpdateValue, clearForm}:Props) => {
    return (
        <div className='App'>
            <div>
                <input placeholder='Name' value={name} onChange={(e) => onUpdateValue('name', e.target.value)}/>
                <input placeholder='Age' value={age} onChange={(e) => onUpdateValue('age', e.target.value)}/>
                <input placeholder='Verb' value={verb} onChange={(e) => onUpdateValue('verb', e.target.value)}/>
                <input placeholder='Noun' value={noun} onChange={(e) => onUpdateValue('noun', e.target.value)}/>
            </div>
            <div>
                <p>Hi, my name is {name}, I'm {age} and I {verb} {noun}</p>
            </div>
            <div>
                <button onClick = {clearForm}>reset</button>
            </div>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default MadLib;