import React from 'react'
import Signup from '../components/Signup'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>
            Home Page
        </h1>
        <Signup/>
    </div>
  )
}
