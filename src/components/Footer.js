import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-semibold">Agro Mart</h3>
          <p className="mt-2">Marketplace para fazendas, gado e sementes.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-yellow-500">Início</a>
          <a href="#about" className="hover:text-yellow-500">Sobre</a>
          <a href="#contact" className="hover:text-yellow-500">Contato</a>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Agro Mart. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;