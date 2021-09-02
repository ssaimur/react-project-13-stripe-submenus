import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'

const Sidebar = () => {
  const {isSidebarOpen, hideSidebar} = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen? 'sidebar-wrapper show': 'sidebar-wrapper'}`}>
      <div className="sidebar">
        <button className='close-btn' onClick={hideSidebar}>
          <FaTimes/>
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const {page, links} = item;
            return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {
                  links.map((each, num) => {
                    const {url, icon, label} = each;
                    return(
                      <a href={url} key={num}>
                        {icon}
                        {label}
                      </a>
                    )
                  } )
                }
              </div>
            </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
