import React from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface categoryBox {
  title: string
  imageName: string
}

const CategoryBox: categoryBox = ({ title = 'Título', imageName = 'test' }) => {
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
