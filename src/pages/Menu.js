import React from 'react'
import {Data} from '../data/data'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {Data.map((item, id) => {
                        return (
                            <div>
                                <MenuItem image={item.image} price={item.price} name={item.name} key={id}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu
