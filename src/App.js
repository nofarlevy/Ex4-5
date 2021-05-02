import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewPost from './NewPost';
import About from './About';
import PostPage from './PostPage';
import './NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className='app'> 
      <header className="App-header">
        </header>
        <h1>This is my blog</h1>
        <NavBar />
        <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/NewPost">NewPost</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/PostPage">
            <PostPage />
          </Route>
          <Route path="/NewPost">
            <NewPost />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/">
            <Home />
          </Route> 
        </Switch>
    </Router>
        
        </div>
       
    );
  }
 
}


/*
class MainMenu extends React.Component {
  render() {
      return (
          <tr>
              <td>
                  <span><a href={"https:"}> Home </a>|</span>
                  <span> <a href={"https:"}>About Me </a> |</span>
                  <span> <a href={"https:"}>Contact Me </a></span>

              </td>
              <td className='login'><a href={"https:"}> Login </a></td>
          </tr>);
  }
}

class MainHeader extends React.Component {
  render() {
      return (
          <tr>
              <td>
                  <h2> This Is My Blog - by Nofar Levy</h2>
              </td>
              <td>
                  <h1 className='rightcolumn' id='latest'> Latest</h1>
              </td>
          </tr>
      );
  }
}

class PopularHeader extends React.Component {
  render() {
      return (
           <h1 className='rightcolumn' id='popular'> Popular</h1>
      );
  }
}


class PostComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          number: "",
          content: "",
          publishedDays: "",
          publishedBy: "",
      };
  }

  render() {
      return (
          <td className='whole_border'>
    <span>
      <h3>Blog post #{this.props.number} </h3>
        {this.props.content}
    </span>
              <br/> <br/> <br/>
              <span
                  className='bottom'> Published {this.props.publishedDays} days ago by {this.props.publishedBy}</span>
          </td>
      );
  }
}

class LatestPosts extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          number: "",
          link: "",
      };
  }

  render() {
      return (
          <span> Blog Post #{this.props.number} <a href={this.props.link}> go to page</a> <br/> <br/>
    </span>);
  }
}

const post1 = {
  number: "1",
  content: `My  first blog post is all about my blog post and how to write a new post in my  blog, you can find it  here. `,
  publishedDays: "1",
  publishedBy: "Nofar"
}

const post2 = {
  number: "2",
  content: ` My  second blog post 
               is all about my blog post`,
  publishedDays: "2",
  publishedBy: "Joe"
}


const post3 = {
  number: "3",
  content: `My First blog post is all about my blog post`,
  publishedDays: "5",
  publishedBy: "Nofar"
}
const blog1 = {
  number: '1',
  link: "https:"
}
const blog2 = {
  number: '2',
  link: "https:"
}
const blog3 = {
  number: '3',
  link: "https:"
}


class Container extends React.Component {
  render() {
      return (
          <table className='border_space' id='MainTable'>

              <MainMenu/>
              <MainHeader/>
              <tr>
                  <PostComponent {...post1} />
                  <td className='border_bottom'>
                      <LatestPosts {...blog1} />
                      <LatestPosts {...blog2} />
                      <LatestPosts {...blog3} />
                  </td>
              </tr>
              <tr>
                  <PostComponent {...post2} />
                  <td className='border_bottom'>
                      <PopularHeader />
                      <LatestPosts {...blog3} />
                      <LatestPosts {...blog1} />
                      <LatestPosts {...blog2} />
                  </td>
              </tr>
              <tr>
              <PostComponent{...post3}/>
              </tr>

          </table>


      );
  }
}
*/
export default App;
