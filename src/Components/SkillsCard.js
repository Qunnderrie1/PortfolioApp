import React from 'react'

const SkillsCard = ({name, img, description}) => {

  return (
    <div className='skillsContainer'>
    <div className='skillsCard'>
        <p>{description}</p>
        <h4>{name}</h4>
        <img src={img} width="100px" />
    </div>


    </div>
  )
}

export default SkillsCard