import React,{useState, useRef} from 'react'
import UseOutsideClick from '.';

function UseOnClickOutsideTest(){
    const [showContent, setShowContent] = useState(false)
    const ref = useRef();
    UseOutsideClick(ref, () => setShowContent(false))
    

    return(
        <div>
            {
                showContent ? <div ref={ref}>
                    <h1>This is Random Content</h1>
                    <p>Please click outside of these to close this it wont close if you click inside of these content</p>
                </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    );
}

export default UseOnClickOutsideTest