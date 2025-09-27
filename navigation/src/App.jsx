import TreeView from './tree-view/index'
import menus from './tree-view/data'
/*Tree view component / menu UI component/ recursive navigation menu*/
function App() {
  return(
    <TreeView menus={menus}/>
  );
}

export default App
