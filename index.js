import React from 'react';
import ReactDOM from 'react-dom';

// Instance of App Component is created
class App extends React.Component{
//App components 'Constructr' function gets called
  constructor(props) {
    super(props);
    //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
    this.state = { latitude: null, Error: ''}; //State object is created and assigned to 'this.state' property

//We call geoLocation Service
    window.navigator.geolocation.getCurrentPosition(
//State can only be updated using the function setState
//(we get the result of geolocation)
        position => { this.setState({ latitude: position.coords.latitude }); },

        err => {this.setState({Error: err.message}); }
    );
  }
//React says we have to define Render
    render() {
//React calls Components Render method (beacause React sees that we updated the state of our component )
//and hence App returns JSX, gets rendered to the page as HTML(updates content on the screen)
if (this.state.Error && !this.state.latitude) {
  return <div>Error: {this.state.Error}</div>;
}

if (this.state.latitude && !this.state.Error) {
  return <div>Latitude: {this.state.latitude}</div>;
}

return <div>Loading...</div>;
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));
