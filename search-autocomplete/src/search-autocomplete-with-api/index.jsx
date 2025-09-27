import React, {useState, useEffect} from 'react'
import Suggestions from './suggestions';

function SearchAutocomplete(){

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setErrors] = useState(null);
    const [searchParams, setSearchParams] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([])

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParams(query)
        if(query.length > 1){
            const filteredData = users && users.length ?
            users.filter(item => item.toLowerCase().indexOf(query) > -1)
            : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        }else{
            setShowDropDown(false);
        }
    }

    function handleClick(event){
        console.log(event.target.innerText);
        setShowDropDown(false);
        setSearchParams(event.target.innerText)
    }

    async function fetchListOfUsers(){
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json();
            console.log(data)
            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem) => userItem.firstName))
                setLoading(false)
                setErrors(null)
            }
        }catch(error){
            setLoading(false);
            console.log(error);
            setErrors(error)
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    },[])

    if(loading){
        return <div>
            <h2>Loading Data ! Please wait</h2>
        </div>
    }

    if(error){
        return(
            <div>Error occured </div>
        );
    }

    console.log(users,filteredUsers)

    return(
        <div className="search-autocomplete-container">
            <input onChange={handleChange} value={searchParams} type="text" name="search-users" placeholder="Search users here..." />
            {
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
            }
        </div>
    );
}

export default SearchAutocomplete