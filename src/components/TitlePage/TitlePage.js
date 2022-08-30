import React from 'react'
import './TitlePage.css'

const NAME = 'FAREL LUKAS'
const NAME_ARR = NAME.split("")

function TitlePage() {
  return (
    <div className="title-container">
      <div className="title-subcontainer">
        <h1 className="title">{NAME_ARR.map((letter, index) => <span key={index} className="letter">{letter}</span>)}</h1>
        <h2 className="subtitle">developer</h2>
      </div>
    </div>
  )
}

export default TitlePage