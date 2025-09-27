import React,{useState,useEffect} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

function ImageSlider({url, limit=5, page}){

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)

    async function fetchImages(getUrl){
        try{
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch(error){
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    useEffect(() => {
        if(url !== '') fetchImages(url)
    },[url])

    console.log(images)

    if(loading){
        return <div>Loading images</div>
    }

    if(errorMsg){
        return <div>error message in loading</div>
    }

    return(
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious}/>
            {
                images && images.length ? 
                images.map((imageItem, index) => (
                    <img src={imageItem.download_url} alt={imageItem.download_url} key={imageItem.id} className={currentSlide === index ? "current-image": "current-slide  hide-current-image"}/>
                ))
                : null
            }
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
            <span className="circle-indicator">
                {
                    images && images.length ? 
                    images.map((_,index) => 
                        <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"} onClick={() => setCurrentSlide(index)}></button>
                    ) : null
                }
            </span>
        </div>
    )
}

export default ImageSlider