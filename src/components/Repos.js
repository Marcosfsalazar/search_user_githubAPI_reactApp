'use strict'
import React from 'react';

export const Repos = ({ repos, starred, className, textName }) => {
  return(
    <div>
      <h2 className='repo-text'>{textName}</h2>
      <ul className='repos'>
        { repos && repos.map((repo,index) => (
          <li key={index} className='repo-content'>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
        { starred && starred.map((repo,index) => (
          <li key={index} className='repo-content'>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Repos.defaultProps = {
  className: ''
}