import React, { useState, useEffect, useRef } from "react";

function FilterMenu({ onApplyFilter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleApplyFilter = () => {
    onApplyFilter({
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
      sortOrder,
    });

    handleCloseMenu();
  };

  return (
    <div className="relative text-center">
      <button
        onClick={handleOpenMenu}
        className="mb-5 shadow appearance-none border rounded w-auto py-4 px-3 bg-gray-200 hover:bg-gray-300 border-gray-300 text-gray-"
      >
        Filtrar
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white border shadow-md rounded-md"
        >
          <div className="p-2 font-semibold">Filtros</div>

          <div className="p-4">
            <label className="block font-semibold">Rango de precios</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="number"
                placeholder="Min"
                className="border rounded p-4 mt-2 sm:mt-0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="border rounded p-4 mt-2 sm:mt-0"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="m-4">
            <label className="block font-semibold">Orden</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded p-4 m-2 sm:m-4"
            >
              <option value="asc">Creciente</option>
              <option value="desc">Decreciente</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            <button
              onClick={handleApplyFilter}
              className="bg-[#2F4D55] text-white p-4 rounded hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline mt-2 sm:mt-0"
            >
              Aplicar Filtros
            </button>
            <button
              onClick={handleCloseMenu}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded mt-2 sm:mt-0"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;
