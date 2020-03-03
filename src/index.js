import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            // the success callback
            position => {
                // we called setState
                this.setState({ lat: position.coords.latitude });
            },
            // the failure callback
            error => console.log(error)
        );
    }

    // React requires a defined render method
    render () {
        

        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
