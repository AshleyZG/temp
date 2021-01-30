import './App.css';
import { Link, BrowserRouter, Route, Switch  } from "react-router-dom";
import InterviewList from "./interview";
import CollaborativeNotebook from "./interview-doc/collaborative-notebook";

function App() {
  document.title = "My Documents";
  return (
    <div className="App">
    <BrowserRouter basename="/temp">
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/tt">tt</Link> */}
        <Link to="/interview">Interview</Link>
        
      </nav>
      <div className="content">
        {/* <Route path="/tt" component={Contact}/> */}
        <Route path="/interview" component={InterviewList}></Route>
        <Route path='/interview-doc/collaborative-notebook' component={CollaborativeNotebook}></Route>

      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
