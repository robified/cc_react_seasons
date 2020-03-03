import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null
        };
    }

    // React requires a defined render method
    render () {
        window.navigator.geolocation.getCurrentPosition(
            // the success callback
            position => console.log(position),
            // the failure callback
            error => console.log(error)
        );

        return <div>Latitude: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
