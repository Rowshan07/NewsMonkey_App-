import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 
 */
class Navbar extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
          <Link className="nav-link" to="/business">Business</Link>
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
          <Link className="nav-link" to="/general">General</Link>
          <Link className="nav-link" to="/health">Health</Link>
          <Link className="nav-link" to="/science">Science</Link>
          <Link className="nav-link" to="/sports">Sports</Link>
          <Link className="nav-link" to="/technology">Technology</Link>
        </div>
      </div>
    </nav>
        </div>;
    }
}


export default Navbar;
