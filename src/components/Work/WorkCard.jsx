import React from 'react'
import './workcard.css'

const WorkCard = ({img,liveUrl,codeUrl}) => {
    
  return (
    <div className='cards-container'>
        <img src={img} alt="" />
        <div className="card-btns">
            <a href={liveUrl}><button>Demo</button></a>
            <a href={codeUrl}><button>Code</button></a>
        </div>
    </div>
  )
}

export default WorkCard