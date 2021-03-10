'use strict'
import React from 'react';

export const Search = ({ handleSearch, isDisabled }) => {
  return(
    <div className='search'>
      <input 
      type="search"
       placeholder='Insira o nome do usuário no github'
       onKeyUp={handleSearch}
       disabled={isDisabled}
       />
    </div>
  )
}