import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links: []});

    const showSidebar = () => {
        setIsSidebarOpen(true);
    }

    const hideSidebar = () => {
        setIsSidebarOpen(false);
    }

    const showSubmenu = (text, coordinates) => {
        const page = sublinks.find(item => {
            return item.page === text;
        })
        setPage(page);
        setLocation(coordinates)
        setIsSubmenuOpen(true);
    }

    const hideSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen, 
            isSubmenuOpen, 
            showSidebar, 
            hideSidebar, 
            showSubmenu, 
            hideSubmenu,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
