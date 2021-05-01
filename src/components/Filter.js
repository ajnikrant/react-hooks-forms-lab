import React from "react";

function Filter({ search, setSearchValue, onCategoryChange }) {

  function handleSearchBar(event){
    setSearchValue(event.target.value)
  }



  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchBar}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
