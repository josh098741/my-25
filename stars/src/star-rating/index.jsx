import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function StarRating({noOfStars = 10}){

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex){
        //When you click a star save that star index in rating
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        //When you move your mouse over that star set hover to that stars index
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        //When you move your mouse away reset hover back to the permanent rating
        setHover(rating)
    }

    return(
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index) => {
                    index += 1;
                    return<FaStar className={index <= (hover || rating) ? 'active':'inactive'} key={index} onClick={() => handleClick(index)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}/>
                })
            }
        </div>
    );
}

/*
    <===Detailed Guide===>
        It display a row of stars (default 10 stars)
        When you  hover over a star -> all the stars light up to that one light up
        When you click a star that becomes your permanent rating
        When you move your mouse away -> it remnembers your clicked rating

        const [rating, setRating] => rating: the star you clicked
        const [hover, setHover] => The star youre currently hovering over

        [...Array(noOfStars)]
            => Creates an empty array with noOfStars length (example [undefined, undefined, ...])
            => Then we loop (map) through it to render stars
        index += 1
            =>Since arrays start at 0 but we want star numbers starting at 1

        className={index <= (hover||rating) ? 'active':'inactive'}
            => If index is less than or equal to hovered star OR clicked rating,
            then this star is "active"(yellow).
            => Otherwise its "inactive"(gray)
        onClick={() => handleClick(index)}
            =>When clicked that star becomes the permanent rating
        onMouseEnter={() => handleMouseEnter(index)}
            =>When hovered, temporarily hightlights stars upto this one
        onMouseLeave={handleMouseLeave}
            =>When mouse leave revert hightlight back to permanent rating

*/