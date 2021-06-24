import React from 'react';

export const Nav = () => {
  return (
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#marketplace">Marketplace</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
