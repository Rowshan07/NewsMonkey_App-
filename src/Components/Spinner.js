import React from 'react';
import loader from './Spinner.gif';

class Spinner extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div>
            {/* vh-100 vw-100 */}
            <div className="container d-flex align-items-center justify-content-center">
            <img className='mb-3' src={loader} alt="Loading" height={100} />
            </div>
        </div>;
    }
}



export default Spinner;