import React from 'react';

export const MobileMenu = ({ pageLinks }) => {
  return <div>
    <ul className={navLinks}>
      {pageLinks.map(lnk => {
        return (
          <li className={navLink} key={lnk}>{lnk}</li>
        )
      })}
    </ul>
  </div>;
};
