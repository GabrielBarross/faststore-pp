import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface bannerCard {
  title: string
}

const BannerCard: bannerCard = ({ title = 'Título' }) => {
  return (
    <div>
      <a href="oi">
        <h4>{title}</h4>
      </a>
    </div>
  )
}

export default BannerCard
