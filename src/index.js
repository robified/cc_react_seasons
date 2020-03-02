import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        // the success callback
        position => console.log(position),
        // the failure callback
        error => console.log(error)
    );

    return <div>Herro there!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
