'use strict'
import React from 'react';

import { Search } from './Search';
import { UserInfo } from './UserInfo';
import { Actions } from './Actions';
import { Repos } from './Repos';

export const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => {
  return(
    <div className='app'>
        <Search isDisabled={isFetching} handleSearch={handleSearch} />
        { isFetching && <div>Loading...</div> }
        {!!userinfo && <UserInfo userinfo = {userinfo} />}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length &&
          <Repos
            textName='Repositories'
            repos={repos}
          />
        }

        {!!starred.length &&
          <Repos
            textName='Starred' 
            starred={starred}
          />
        }
    </div>
  )
}