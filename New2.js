import axios from 'axios';
import React from 'react';

class New2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: [],
            timerRunning: false 
        };
        this.timer = null; 
    }

    componentDidMount() {
      
        this.startTimer();
    }

    componentWillUnmount() {
        // Clear the timer when component unmounts to prevent memory leaks
        clearInterval(this.timer);
    }

    // Function to start the timer
    startTimer = () => {
        this.timer = setInterval(this.fetchData, 5000); // Fetch data every 5 seconds
        this.setState({ timerRunning: true }); // Set the flag to indicate timer is running
    }

    // Function to stop the timer
    stopTimer = () => {
        clearInterval(this.timer); // Clear the interval
        this.setState({ timerRunning: false }); // Set the flag to indicate timer is stopped
    }

    // Function to fetch random data
    fetchData = () => {
        axios.get("https://randomuser.me/api/")
            .then(res => {
                console.log(res.data);
                this.setState({ mydata: res.data.results });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    // Function to handle button click to update random data
    submit = () => {
        this.fetchData(); // Fetch new random data
    }

    render() {
        return (
            <center>
                <div>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Random Data User</h2>
                    {this.state.mydata.map((results, i) => {
                        return (
                            <div key={i} style={{ backgroundColor: 'skyblue', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '10px', maxWidth: '560px' }}>
                                <img src={results.picture.large} alt="User Thumbnail" style={{ width: 'auto', borderRadius: '500px', border: '1px solid black' }} />
                                <h3>Name: {results.name.first} {results.name.last}</h3>
                                <p>Email: {results.email}</p>
                                <p>Gender: {results.gender}</p>
                                <p>Phone: {results.phone}</p>
                                <p>Country: {results.location.country}</p>
                                <button onClick={this.submit.bind(this)} style={{ backgroundColor: '#405DE6', color: '#ffffff', border: 'none', borderRadius: '5px', padding: '10px 20px', marginTop: '5px',marginRight:"5px", cursor: 'pointer' }}> Random Data start</button>
                                <button onClick={this.state.timerRunning ? this.stopTimer : this.startTimer} style={{ backgroundColor: '#405DE6', color: '#ffffff', border: 'none', borderRadius: '5px', padding: '10px 20px', marginTop: '5px', cursor: 'pointer' }}>{this.state.timerRunning ? 'Stop' : 'Start'} Random data stop</button>
                            </div>
                        );
                    })}
                </div>
            </center>
        );
    }
}

export default New2;
