import { useState, useEffect } from 'react';

const BuscadorProyectos = ({ searchTerm, onSearch, isSearching, setIsSearching }) =>
{
  const [ searchInput, setSearchInput ] = useState(searchTerm);


  useEffect(() =>
  {
    setIsSearching(!!searchTerm); 
  }, [ searchTerm, setIsSearching ]);


  const handleInputChange = (e) =>
  {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) =>
  {
    e.preventDefault();
    if (searchInput.trim() !== '')
    {
      onSearch(searchInput);
    }
  };

  const handleClearSearch = () =>
  {
    setSearchInput('');
    onSearch('');
  };

  return (
    <div className="container col-sm-12 col-md-12 col-lg-4 d-flex flex-column my-md-4">
      <p className="text-sans-p text-center my-4">Accede al buscador de proyectos escribiendo palabras clave</p>
      <div className="input-group border border-2 d-flex " >
        <input
          className="form-control border-0 input-search"
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder='Buscar proyecto por palabras claves '
        />
        {isSearching && (
          <button className="btn  border  border-0 " onClick={handleClearSearch} id="icon-inputClose">
            <i className="material-symbols-outlined " >close</i>
          </button>
        )}
        <span className="input-group-append">
          <button
            className="btn  border-0  border-2 "
            type="button"
            onClick={handleSearch}
            disabled={searchInput.trim() === ''} id="icon-inputSearch">
            <i className="material-symbols-outlined" >search</i>
          </button>
        </span>
      </div>
    </div>
  );
};

export default BuscadorProyectos;
