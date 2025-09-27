import React,{useState} from 'react'
import './style.css'
import data from './data'

function Accordian(){

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(index){
        setSelected(index === selected ? null : index)
    }

    function handleMultiSelection(getCurrentId){
        const cpyMultiple = [...multiple]
        const findIndexOfCurrent = cpyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrent === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrent, 1);
        setMultiple(cpyMultiple)
    }

    return(
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiselection</button>
            <div className="Accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <div>
                        <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                            <h2>{dataItem.question}</h2>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div>{dataItem.answer}</div> : selected === dataItem.id? <div>{dataItem.answer}</div>: null
                        }
                    </div>)
                    : <div>No data was found</div>
                }
            </div>
        </div>
    );
}

export default Accordian