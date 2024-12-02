import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-between md:justify-around">
        <li><a href="#quem-somos" className="text-white">Quem Somos</a></li>
        <li><a href="#produtos" className="text-white">Produtos</a></li>
        <li><a href="#contato" className="text-white">Contato</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;
