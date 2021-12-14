import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface bannerCard {
  title: string
  imageURL: string
  smallText: string
}

const BannerCard = (props: bannerCard) => {
  const { title, imageURL, smallText } = props

  return (
    <a href="/">
      <div className="banner-card flex flex-row">
        <div className="flex flex-col ">
          <img className="banner-card-image" src={imageURL} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="banner-card-small">{smallText}</p>
          <h4 className="banner-card-title">{title}</h4>
        </div>
      </div>
    </a>
  )
}

export default BannerCard
