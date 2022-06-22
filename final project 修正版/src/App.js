import {BrowserRouter,Route} from 'react-router-dom';
import { Switch } from "react-router";
import Header from './Header';
import './App.css';
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import Post from './pages/Post';
import My from './pages/My';



function App() {
  return ( 
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/" exact >
        <Posts/>
        
        
      </Route>
      <Route path="/signin" ><Signin/>
      </Route> 
      <Route path="/new-post" exact>
      <NewPost/>
      </Route>
      <Route path="/posts/:postId" exact >
        
        <Post/>
      </Route>

      <Route path="/my" exact>
        
        <My/>
      </Route>


      
    </Switch>
  </BrowserRouter>



);
  
}

export default App;















    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>