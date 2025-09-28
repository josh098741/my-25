import React,{useState} from 'react'


function Tabs({tabsContent, onChange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return(
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem, index) => (
                        <div key={tabItem.label} className={`tab-item ${currentTabIndex === index ? 'active':''}`} onClick={() => handleOnClick(index)}>
                            <span>{tabItem.label}</span>
                        </div>
                    ))
                }
            </div>

            <div className="content">
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].component
                }
            </div>
        </div>
    );
}

export default Tabs