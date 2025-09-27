import User from './user'
import React, { useState, useEffect } from 'react'


function GithubProfileFinder() {

    const [userName, setUserName] = useState('sangammukherjee');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true)

    async function fetchGithubUserData() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = await response.json();
        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName('')
        }
        console.log(data);
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h1>Loading user data</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input type="text" name="search-by-username" placeholder="Search github username..." value={userName} onChange={(event) => setUserName(event.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? < User user={userData}/> : null
            }
        </div>
    );
}

export default GithubProfileFinder