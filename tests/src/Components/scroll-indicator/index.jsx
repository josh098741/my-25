import React,{useState,useEffect} from 'react'
import './styles.css'

function ScrollIndicator({url}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [scrollPercantage, setScrollPercantage] = useState(0)

    async function fetchData(getUrl){
        try{
            setLoading(true)
            const response = await fetch(getUrl);
            const result = await response.json();
            if(result && result.products && result.products.length > 0){
                setLoading(false)
                setData(result.products)
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
        );
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log((howMuchScrolled / height) * 100)
        setScrollPercantage((howMuchScrolled / height ) * 100)
    }

    useEffect(() => {
        fetchData(url)
    },[url])

    useEffect(() => {
        window.addEventListener('scroll',handleScrollPercantage);
        return () => {
            window.removeEventListener('scroll',handleScrollPercantage)
        }
    })

    if(loading){
        return<div>Loading Data Please wait</div>
    }

    if(error !== ''){
        return<div>There was an error</div>
    }

    return(
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width: `${scrollPercantage}%`}}></div>
                </div>
            </div>

            <div className="content-container">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="data-container">{dataItem.title}</div>)
                    : null
                }
            </div>
        </div>
    );
}

export default ScrollIndicator