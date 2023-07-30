import React from 'react'

const SkillsCard = ({name, img, progress}) => {

  return (
    <div className='skillsContainer'>
    <div className='skillsCard'>

        <h4>{name}</h4>
        <img src={img} width="50px" />
    </div>


    </div>
  )
}

export default SkillsCard