import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { Menu } from 'antd';

const Navbar = props => {
  return (
    <div className="menu">
      <Menu theme="dark" mode="horizontal" style={{ background: '#FF2A00', lineHeight: '40px', fontWeight: 'bold', fontSize: '18px', fontColor: '#000000' }}>
        <Menu.Item key="1" className="menu-item-left">NIKE</Menu.Item>
        <Menu.Item key="2" className="menu-item-right">
          <NavLink to="/contact">Kids</NavLink>
        </Menu.Item>
        <Menu.Item key="3" className="menu-item-right">
          <NavLink to="/events">Men</NavLink>
        </Menu.Item>
        <Menu.Item key="4" className="menu-item-right">
          <NavLink to="/">Women</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(Navbar);