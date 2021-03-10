'use strict'
import React from 'react';

export const Actions = ({ getRepos, getStarred }) => {
  return(
    <div className="actions">
      <button onClick={getRepos}>Ver Repositórios</button>
      <button onClick={getStarred}>Ver Favoritos</button>
    </div>
  )
}