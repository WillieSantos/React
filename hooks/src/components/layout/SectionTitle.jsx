import './SectionTitle.css'
import React from 'react'


export default props => {
    return (
        <div className="SectionTitle">
            <h3>{props.title}</h3>
        </div>
    )
}
