import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            // the success callback
            position => {
                // we called setState
                this.setState({ lat: position.coords.latitude });
            },
            // the failure callback
            error => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    // React requires a defined render method
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
