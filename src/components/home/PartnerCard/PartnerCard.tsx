import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface partnerCard {
  partnerName: string
  partnerText: string
  url: string
}

const PartnerCard = (props: partnerCard) => {
  const { partnerName, partnerText, url } = props

  return (
    <article className="partner-card">
      <a href={url}>
        <div className="partner-card-header">
          <img src="" alt="" />
          <h6>{partnerName}</h6>
        </div>
        <div className="partner-card-body">
          <p>{partnerText}</p>
        </div>
      </a>
    </article>
  )
}

export default PartnerCard
