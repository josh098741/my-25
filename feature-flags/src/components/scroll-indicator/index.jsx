import React, {useState, useEffect} from 'react'
import './style.css'

function ScrollIndicator({url}){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercantage, setScrollPercantage] = useState(0)

    async function fetchData(getUrl){
        try{
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json()


            if(data && data.products && data.products.length > 0){
                setData(data.products);
                setLoading(false);
            }
        }catch(error){
            console.log(error);
            setLoading(false);
            setErrorMessage(error.message);
        }
    }

    function handleScrollPercantage(){
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight)

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercantage((howMuchScrolled/ height) * 100)
    }

    useEffect(() => {
        fetchData(url)
    },[url])

    useEffect(() => {
        window.addEventListener('scroll',handleScrollPercantage)
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    },[])

    console.log(data, scrollPercantage)

    if(loading){
        return <div>Data is Loading</div>
    }

    if(errorMessage !== ''){
        <div>There was an error</div>
    }

    return(
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width: `${scrollPercantage}%`}}></div>
                </div>
            </div>
            
            <div className="data-container">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <p>{dataItem.title}</p>)  
                    : null
                }
            </div>
        </div>
    );
}

export default ScrollIndicator