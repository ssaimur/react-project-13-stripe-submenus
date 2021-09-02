import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
  const {isSubmenuOpen, location, page:{page, links}} = useGlobalContext();
  const position = useState(null);
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    const {center, bottom} = location;
    position.current.style.left = `${center}px`
    position.current.style.top = `${bottom}px`
    if (links.length === 3){
      setColumns('col-3');
    }
    if(links.length > 3){
      setColumns('col-4')
    }
  }, [location, links])

  return (
    <aside className={`${isSubmenuOpen?"submenu show": 'submenu'}`} ref={position}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {
          links.map((item, index) => {
            const {label, icon, url} = item;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })
        }
      </div>
    </aside>
  )
}

export default Submenu
