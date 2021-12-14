import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface categoryBox {
  title: string
  imageName: string
}

const CategoryBox = (props: categoryBox) => {
  const { title, imageName } = props

  return (
    <>
      <li>
        <a href="oi">
          <img src={`${imageName}`} alt={`Categoria ${title}`} />
          <p>{title}</p>
        </a>
      </li>
    </>
  )
}

export default CategoryBox
