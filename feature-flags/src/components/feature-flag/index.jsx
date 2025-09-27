import React,{useContext} from 'react'
import Accordian from "../accordian"
import RandomColor from "../color-picker"
import LightDarkMode from "../light-dark"
import TicTakToe from "../tik-tak-toe"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from './context'
import menus from '../../../../navigation/src/tree-view/data'

export default function FeatureFlags(){

    const {loading, enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key : 'showLightDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTikTakToeBoard',
            component: <TicTakToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        }
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if(loading){ 
        return(
            <div>
                <h1>Loading Data Please wait</h1>
            </div>
        );
    }

    return(
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    );
}