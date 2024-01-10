import React from 'react'

const SkillsCard = ({name, img, description}) => {

  return (
    <div className='skillsContainer'>
    <div className='skillsCard'>

    <div className='topSkillsContainer'>
    <img src={img} width="100px" />
    <h4>{name}</h4>
      </div>
    <div style={{marginTop: "-70px"}}>
    <p>{description}</p>
    </div>


    </div>

    </div>
  )
}

export default SkillsCard