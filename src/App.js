import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}
    pageSize = 12;
  render() {
    return <>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/business" element={<News key={1} country ={"us"} pageSize={this.pageSize} category={"business"}/>}></Route> 
          <Route exact path="/entertainment" element={<News key={2} country ={"us"} pageSize={this.pageSize} category={"entertainment"}/>}></Route>
          <Route exact path="/sports" element={<News key={3} country ={"us"} pageSize={this.pageSize} category={"sports"}/>}></Route>
          <Route exact path="/health" element={<News key={4} country ={"us"} pageSize={this.pageSize} category={"health"}/>}></Route>
          <Route exact path="/technology" element={<News key={5} country ={"us"} pageSize={this.pageSize} category={"technology"}/>}></Route>
          <Route path="/general" element={<News key={6} country ={"us"} pageSize={this.pageSize} category={"general"}/>}></Route>
          <Route path="/science" element={<News key={7} country ={"us"} pageSize={this.pageSize} category={"science"}/>}></Route>
          <Route path="/" element={<News key={8} country ={"us"} pageSize={this.pageSize} category={"general"}/>}></Route>
        </Routes>
        </Router>
    </>;
  }
}


export default App;
