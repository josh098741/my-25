import Tabs from './tabs'
import './tabs.css'

function RandomComponent(){
    return<div>This is the random component</div>
}

function TabTest(){

    const tabs = [
        {
            label: 'Tab 1',
            component: <div>This is the content for tab1</div>
        },
        { 
            label: 'Tab 2',
            component: <div>This is thee component for tab2</div>
        },
        {
            label: 'Tab 3',
            component: <RandomComponent />
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }
    return(
        <Tabs tabsContent={tabs} onChange={handleChange} />
    );
}

export default TabTest