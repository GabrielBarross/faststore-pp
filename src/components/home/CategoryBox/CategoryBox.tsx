import React from 'react'
import { IconContext } from 'react-icons'
import { HiOutlineTag } from 'react-icons/hi'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface categoryBox {
  title: string
  url: string
}

const CategoryBox = (props: categoryBox) => {
  const { title, url } = props

  return (
    <>
      <li className="category-card">
        <div className="category-icon-card">
          <IconContext.Provider value={{ color: '#4a596b', size: '50px' }}>
            <a href={url}>
              <HiOutlineTag />
            </a>
          </IconContext.Provider>
        </div>
        <p className="category-box-title">{title}</p>
      </li>
    </>
  )
}

export default CategoryBox
