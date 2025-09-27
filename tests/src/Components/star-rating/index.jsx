import {FaStar} from 'react-icons/fa'
import React,{useState} from 'react'
import './styles.css'

function StarRating({noOfStars = 10}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    function handleClick(index){
        setRating(index);
    }

    function handleMouseEnter(index){
        setRating(index);
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    return(
        <div>
            {
                [...Array(noOfStars)].map((_,index) => {
                index += 1
                return<FaStar key={index} onClick={() => handleClick(index)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className={index <= (hover || rating) ? 'active':'inactive'}/>
            })
        }
        </div>
    );
}

export default StarRating