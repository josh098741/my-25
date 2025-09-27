import React,{useState,useEffect} from 'react'
import './styles.css'


function ScrollIndicator({url}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0)

    async function fetchData(getUrl){
        try{
            setLoading(true)
            const response = await fetch(getUrl)
            const result = await response.json()
            if(result && result.products && result.products.length){
                setData(result.products)
                setLoading(false)
            }
        }catch(error){
            setLoading(false)
            setError(error.message)
        }
    }

    function handleScrollPercantage(){
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        )


        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setScrollProgress((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        fetchData(url)
    },[url])

    useEffect(() => {
        window.addEventListener('scroll',handleScrollPercantage)
        return () => window.removeEventListener('scroll',handleScrollPercantage)
    },[])

    if(loading){
        return <div>Loading data please be patient</div>
    }

    if(error !== ''){
        return<div>Error occured in loading data</div>
    }

    return(
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width: `${scrollProgress}%`}}></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <div>{dataItem.title}</div>)
                    : null
                }
            </div>
        </div>
    );
}

export default ScrollIndicator