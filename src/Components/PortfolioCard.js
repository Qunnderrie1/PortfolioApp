import React from 'react'

const PortfolioCard = ({name , img , website}) => {
  return (
    <div className='portfolioCardContainer'>
    <a href={website}>
    <img src={img} />
    </a>

    <div className='portfolioBody'>
        <p>{name}</p>
    </div>

</div>
  )
}

export default PortfolioCard