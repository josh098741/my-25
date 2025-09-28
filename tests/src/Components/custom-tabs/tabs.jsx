import React,{useState} from 'react'

function Tabs({tabContent, onChange}){

    const [urrentTabIndex, setCurrentTabIndex] = useState(0)

    return(
        <div className="wrapper">
            <div className="heading"></div>
            <div className="data-container"></div>
        </div>
    );
}

export default Tabs