import React,{useState} from 'react'
import data from './data'
import './styles.css'

function Accordian(){

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentIndex){
        setSelected(getCurrentIndex === selected ? null : getCurrentIndex);
    }

    function handleMultiSelection(getCurrentId){
        const cpyMultiple = [...multiple]
        const findIndexOfCurrent = cpyMultiple.indexOf(getCurrentId);
        if(findIndexOfCurrent === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrent, 1);
        setMultiple(cpyMultiple)
    }
 
    return(
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div className="title" onClick={enableMultiSelection ? 
                            () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)}>
                            <h2>{dataItem.question}</h2>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? 
                            multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> 
                            : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                    </div>)
                    : null
                }
            </div>
        </div>
    );
}

export default Accordian