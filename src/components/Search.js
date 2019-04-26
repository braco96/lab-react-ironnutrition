import React from "react";

// Componente que representa un campo de búsqueda para filtrar los alimentos
// Recibe la prop "query" con el texto actual y "onSearch" para avisar de los cambios
function Search({ query, onSearch }) {
  // Comunica al componente padre el nuevo valor de búsqueda
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-box">
      {/* Etiqueta e input controlado para la búsqueda */}
      <label>Search</label>
      <input value={query} type="text" onChange={handleSearch} />
    </div>
  );
}

export default Search;
