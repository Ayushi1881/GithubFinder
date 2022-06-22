import {useEffect, useState} from 'react'

function UserResult() {
    const [users, setUsers] =useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
        const response = await fetch(`${ process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()
        console.log(data);
    }

  return (
    <div>User Result</div>
  )
}

export default UserResult