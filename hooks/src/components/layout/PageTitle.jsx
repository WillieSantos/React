import './PageTitle.css'
import React from 'react'


export default props => {
    return (
        <div className={`PageTitle ${props.error ? "error" : ""}`}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}
