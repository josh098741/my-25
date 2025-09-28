import Tabs from './tabs'
import './tabs.css'

function RandomContent(){
    return <div>This is the Random Content</div>
}

function TabTest(){
    const tabs = [
        {
            label : 'Tab 1',
            content: <div>This is the content for Tab 1</div>
        },
        {
            label : 'Tab 2',
            content: <div>This is the content for Tab 2</div>
        },
        {
            label : 'Tab 3',
            content : <RandomContent />
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }

    return(
        <Tabs tabContent={tabs} onChange={handleChange}/>
    );
}


export default  TabTest