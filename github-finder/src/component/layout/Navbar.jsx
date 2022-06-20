import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar