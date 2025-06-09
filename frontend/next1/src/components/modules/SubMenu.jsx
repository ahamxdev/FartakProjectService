import React from 'react'

const SubMenu = ({ items, isSubMenuOpen }) => {
      return (
            <>
                  <ul className={`absolute top-[105%] z-50 left-2 right-2 bg-white rounded-sm transition-all duration-100 ${isSubMenuOpen ? "h-auto py-1 px-4" : "h-0 py-0 px-0"}`} id='category-submenu'>
                        <li className={`text-sm cursor-pointer hover:bg-zinc-200 rounded-md transition-all duration-75 hover:text-white py-0.5 px-2 font-bold text-[#000] ${isSubMenuOpen ? "block" : "hidden"} `}>ترجمه</li>
                  </ul>
            </>
      )
}

export default SubMenu