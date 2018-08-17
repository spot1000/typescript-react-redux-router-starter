import * as React from 'react';
import { Link } from "react-router-dom";
import { madLibState } from '../types'

import '../App.css';


export interface Props extends madLibState {
    onUpdateValue: (field:string, value:any) => void,
    clearForm: () => void
       
}

class MadLib extends React.Component<Props, madLibState>{
    onChange = (e:any) => {
        this.props.onUpdateValue(e.target.dataset.name, e.target.value)
    }

    render() {
        const {name, verb, noun, age, clearForm} = this.props;
        return (
            <div className='App'>
             <div>
                 <input placeholder='Name' data-name="name" value={name} onChange={this.onChange}/>
                 <input placeholder='Age' data-name="age" value={age} onChange={this.onChange}/>
                 <input placeholder='Verb' data-name="verb" value={verb} onChange={this.onChange}/>
                 <input placeholder='Noun' data-name="noun" value={noun} onChange={this.onChange}/>
             </div>
             <div>
                 <p>Hi, my name is {name}, I'm {age} and I {verb} {noun}</p>
             </div>
             <div>
                 <button onClick = {clearForm}>reset</button>
             </div>
             <Link to='/'>Back</Link>
         </div>
        )
    }
}

export default MadLib;