import React, {useState} from 'react'
import './tabs.css'


function Tabs({ tabsContent, onChange }) {
 
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem,index) => (
                        <div className={`tab-item ${currentTabIndex === index ? 'active':''}`} key={tabItem.label} onClick={() => handleOnClick(index)}>
                            <span className="label">{tabItem.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="content" style={{color: 'red'}}>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    );
}

export default Tabs