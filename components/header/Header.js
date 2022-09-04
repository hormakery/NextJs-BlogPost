import React from 'react'
import Link from 'next/link'
import ReactSwitch from 'react-switch'

export default function Header () {
  return (
    <header>
    <div className="container">
      <Link href="/" passHref>
        <h2>My Blog</h2>
      </Link>

    </div>
  </header>
  )
}


