import React, {useState} from 'react'
import Modal from './modal'

function ModalTest(){

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }

    function onClose(){
        setShowModalPopup(false)
    }

    return(
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal onClose={onClose} header={<div>Customized Header</div>} footer={<div><h1>Customized footer</h1></div>} body={<div>Customized Body</div>}/> 
            }
        </div>
    );
}

export default ModalTest