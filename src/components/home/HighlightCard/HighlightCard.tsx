import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface highlightType {
  title: string
  text: string
  url: string
  image: string
}

const HighlightCard = (props: highlightType) => {
  const { title, text, url, image } = props

  return (
    <article className="flex-col w-30 highlight-card">
      <a href={url}>
        <img src={image} alt={`Highlight ${title}`} />
        <h6 className="highlight-title">{title}</h6>
        <p className="highlight-text">{text}</p>
      </a>
    </article>
  )
}

export default HighlightCard
