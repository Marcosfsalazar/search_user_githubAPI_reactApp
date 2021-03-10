'use strict'
import React from 'react';

export const UserInfo = ({ userinfo }) => {
  return (
    <div className='user-info'>
      <img src={userinfo.photo} className='profile-pic'/>
      <span className="profile-name">
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </span>
      <ul className="repos-info">
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  )
}