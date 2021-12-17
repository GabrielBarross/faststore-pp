import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface partnerCard {
  partnerName: string
  partnerText: string
}

const PartnerCard = (props: partnerCard) => {
  const { partnerName, partnerText } = props

  return (
    <article className="partner-card">
      <div className="partner-card-header">
        <img src="" alt="" />
        <h6>{partnerName}</h6>
      </div>
      <div className="partner-card-body">
        <p>{partnerText}</p>
      </div>
    </article>
  )
}

export default PartnerCard
