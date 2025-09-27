import React, {useEffect} from 'react'


function UseOutsideClick(ref, handler){

    useEffect(() => {
        function listener(event){
            //If clicking inside the element or if ref is not set, do nothing
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            //Otherwise, call the handler (click was outside)
            handler(event)
        }
        document.addEventListener('mousedown',listener)
        document.addEventListener('touchstart',listener)

        return () => {
            document.removeEventListener('mousedown',listener)
            document.removeEventListener('touchstart',listener)
        }

    },[handler, ref]);//re-run effect if ref or handler changes
}

export default UseOutsideClick