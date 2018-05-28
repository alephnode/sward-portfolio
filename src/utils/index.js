import React from 'react'

export const listItems = (list, listType = 'list') =>
  list.map((item, i) => {
    return listType === 'link' ? (
      <a href={item.link}>
        <li key={i}>{item.text}</li>
      </a>
    ) : (
      <li key={i}>{item}</li>
    )
  })
