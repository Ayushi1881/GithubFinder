import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user:{},
        repos: [],
        loading: false,
    }
    const [state, dispatch] =useReducer(githubReducer, initialState)

    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)

        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items,

        })
    }

//get single user
    const getUser = async (login) => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users/${login}`)
        

        if(response.status === 404){
            window.location = '/notfound'
        } else{
            
            const data = await response.json()
            dispatch({
                type: 'GET_USERS',
                payload: data,
    
            })
        }

    }

    //get user repos
    const getUserRepos = async (login) => {
        setLoading()
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        })
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)


        const data = await response.json()
        dispatch({
            type: 'GET_REPOS',
            payload: data,

        })
    }
    //clear user
    const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

    //set loading
    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return( 
    <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos:state.repos,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
    }}>
        {children}
    </GithubContext.Provider>)
}
export default GithubContext