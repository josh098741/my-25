import React,{useState} from 'react'

function Tabs({tabContent, onChange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleChange(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return(
        <div className="wrapper">
            <div className="heading">
                {
                    tabContent.map((tabItem, index) => (
                        <div className={`tab-item ${currentTabIndex === index ? 'active':''}`} key={tabItem.label} onClick={() => handleChange(index)}>
                            <span>{tabItem.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="data-container">
                {
                    tabContent[currentTabIndex] && tabContent[currentTabIndex].content
                }
            </div>
        </div>
    );
}

export default Tabs