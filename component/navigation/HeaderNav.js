import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const HeaderNav = ({position}) => {
    const [menu, setMenu] = useState();
    useEffect(() => {
        
        async function fetchMenuItems() {
          try {
            const response = await fetch('http://localhost/wp/gutenberg-for-wiki/wp-json/wp/v2/menu-items/primary');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const menuItems = await response.json();
            setMenu(menuItems);
          } catch (error) {
            console.error('Error:', error);
          }
        }
        fetchMenuItems();
      }, [menu]);

  return (
    <nav className="fz-header-nav">
        {menu && <ul className={`align-items-center ${position}`}>
            {
                menu.map((item, index) => {
                    return(
                        <li key={index} className="fz-dropdown fz-nav-item">
                            {item.name && <Link href={item.url} role="button" className="fz-nav-link"><span>{item.name}</span> 
                                {item.submenu && item.submenu.length > 0 && <i className="fa-regular fa-plus"></i>}
                            </Link>}
                            {
                                item.submenu && item.submenu.length > 0 && 
                                <ul className="fz-submenu">
                                    {
                                        item.submenu.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    {item.name && <li><Link href={item.url && item.url} className="fz-nav-link fz-submenu-nav-link">{item.name}</Link></li>}
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </li>
                    )
                })
            }
            
        </ul>}
    </nav>
  )
}

export default HeaderNav