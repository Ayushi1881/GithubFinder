import {useState, UseContext, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState('')

    const {users, searchUsers} = useContext(GithubContext)
    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            alert('Please enter Something')
        }else {
            searchUsers(text)

            setText('')
        }
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="form-control w-max">
            <div className="input-group">
                <input
                 type="text"
                 placeholder="Search…"
                 className="input input-bordered lg:w-96"
                 value={text}
                 onChange={handleChange} />
                <button className="btn btn-square" type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
        </form>
        {users.length > 0 && (
            <div className="btn btn-ghost btn-sm"> Clear </div>

        )}
    </div>
  )
}

export default UserSearch