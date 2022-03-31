import React from 'react'
import {Link} from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <h2>Main Layout</h2>
        <ul>
            <Link to='/region'>
                Region
            </Link>
        </ul>
        <ul>
        <Link to='/countries'>
                Countries
            </Link>
        </ul>
        <ul>
        <Link to='/locations'>
                Location
            </Link>
        </ul>
        <ul>
        <Link to='/jobs'>
                Job
            </Link>
        </ul>
        <ul>
        <Link to='/departments'>
        Department
            </Link>
        </ul>
        <ul>
        <Link to='/dependents'>
              Dependents
            </Link>
        </ul>
    </div>
  )
}
