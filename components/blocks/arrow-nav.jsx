import React from 'react'

import {
  arrowNav,
  indicatorBullets,
  bullet,
  activeBulletStyle,
} from '../../styles/blocks/arrow-nav.module.scss'

export const ArrowNav = ({
  handleArrow,
  list,
  activeOption,
}) => {
  return (
    <div className={arrowNav}>
      <span
        onClick={() => handleArrow(-1)}
      >
        ◀
      </span>
      <div className={indicatorBullets}>
        {list.map((itm, idx) => {
          const activeBullet =
            idx === activeOption ? activeBulletStyle : null
          return (
            <span key={idx} className={`${bullet} ${activeBullet}`} />
          )
        })}
      </div>
      <span
        onClick={() => handleArrow(1)}
      >
        ▶
      </span>
    </div>
  )
}
