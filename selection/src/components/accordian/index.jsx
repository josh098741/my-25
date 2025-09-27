//single selection
//multibles selection
import React, {useState} from 'react'//Lets us manage component state
import './styles.css'
import data from './data'//An array of objects like {id, question, answer}

export default function Accordian(){

    const [selected, setSelected] = useState(null)//Tracks the one currently opened item in a single selection
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)//boolean toggle(true = multi-select mode, false=single-select mode)
    const [multiple, setMultiple] = useState([])//Multiple an array of ids for the items that are open in multi selection mode
    
    function handleSingleSelection(index){
        setSelected(index === selected ? null : index)
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];//If you click the same item aagain -> it closes(null)
        const findIndexOfCurrent = cpyMultiple.indexOf(getCurrentId)//Otherwise -> update selected with the new id
        if(findIndexOfCurrent === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrent, 1)//remove if not present
        setMultiple(cpyMultiple)
    }
    
    return(
        <div className="wrapper" >
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <div className="item">
                        <div className="title" onClick={ enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}> 
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                    </div>)
                    : <div> No data found !</div>
                }
            </div>
        </div>
    );
}