import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ajax from '@fdaciuk/ajax';
import './main.css';

import { AppContent } from './components/App-content';

class App extends Component {

    constructor () {
        super()
        this.state = {
            userinfo:null,
            repos: [],
            starred: [],
            isFetching: false,
        }
    }

    getGitHubApiUrl(username,type){
        const useUserName  = username ? `/${username}` : '';
        const useType = type ? `/${type}` : '';
        return `https://api.github.com/users${useUserName}${useType}`
    }

    handleSearch(e){
        const value = e.target.value;
        const keyCode = e.which || e.keyCode;
        const ENTER = 13; //enter keycode
        if(keyCode === ENTER){
          this.setState({ isFetching: true })
          ajax().get(this.getGitHubApiUrl(value))
          .then((result) => {
            this.setState({
                userinfo: {
                    username: result.name,
                    photo: result.avatar_url,
                    login: result.login,
                    repos: result.public_repos,
                    followers: result.followers,
                    following: result.following,
                },
                repos: [],
                starred: [],
            })
          })
          .always(() => {
              this.setState({ isFetching: false, })
          })
        }
    }

    getRepos(type){
      return (e) => {
          const user = this.state.userinfo.login;
          ajax().get(this.getGitHubApiUrl(user,type))
          .then((result) => {
              this.setState({
                  [type]: result.map((repo) => {
                      return {
                          name: repo.name,
                          link: repo.html_url,
                      }
                  })
              })
          })
      }
    }
    
    render(){
        return (
            <AppContent 
            userinfo={ this.state.userinfo }
            repos={this.state.repos}
            starred={this.state.starred}
            isFetching={this.state.isFetching}
            handleSearch={(e) => this.handleSearch(e)}
            getRepos={this.getRepos('repos')}
            getStarred={this.getRepos('starred')}
            />
        )    
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))