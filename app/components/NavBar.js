import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="navbar">
      <Link className="btn-flat btn-large col s5" to="/students">
        Students
        </Link>
        <br />
      <Link className="btn-flat btn-large col s5" to="/campuses">
        Campuses
    </Link>
    </div>
  )
}

