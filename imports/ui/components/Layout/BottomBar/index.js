import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarRoutes = [
    {
        route: '/orders',
        label: 'Orders',
        image: '/icons/stats.png',
    },
    {
        route: '/inventory',
        label: 'Inventory',
        image: '/icons/digest.png',
    },
];
const Sidebar = () => {
    return (
        <div className="side-bar-container">
            <ul>
                {sidebarRoutes.map(({ route, label, image }) => (
                    <li key={route}>
                        <NavLink
                            to={route}
                            className={({ isActive, isPending }) =>
                                // eslint-disable-next-line no-nested-ternary
                                isPending ? 'pending' : isActive ? 'active' : ''
                            }
                        >
                            <img src={image} alt={label} />
                            <span> {label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
