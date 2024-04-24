import axios from 'axios';
import React from 'react';

class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mydata: [],
            text1: ""
        };
    }

    componentDidMount () {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(res => {
                console.log(res.data)
                this.setState({ mydata: res.data.meals })
            })
    }

    searchFood = (e) => {
        e.preventDefault();
        const searchText = this.state.text1.toUpperCase();
        const filteredData = this.state.mydata.filter(meal => meal.strMeal.toUpperCase().includes(searchText));
        this.setState({ mydata: filteredData });
    }

    render() {
        return (
            <>
            <div style={{textAlign:'center'}}>
                <form style={{ marginBottom: '20px' }} onSubmit={this.searchFood}>
                    <label htmlFor="searchInput" style={{ marginRight: '10px' }}>Search:</label>
                    <input type='text' id="searchInput" placeholder='Enter Reacipe Name' onChange={(e) => this.setState({ text1: e.target.value })} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' ,margin:"5px",width:"600px"}} />
                    <button type="submit" style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', background: 'blue', color: 'white', cursor: 'pointer' }}>Search</button>
                </form>
                </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', height: "auto", width: "100", color: "blue", background: "gray", padding: '20px' }}>
                

                {this.state.mydata.map((meal, i) => {
                    return (
                        <div key={i} style={{
                           
         justifyContent:"center",
         
                            padding: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            width: '200px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            backgroundColor: '#f9f9f9'
                        }}>
                            <p style={{ marginBottom: '5px' }}>ID: {meal.idMeal}</p>
                            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%' }} />
                            <p style={{ marginTop: '5px', fontWeight: 'bold' }}>Name: {meal.strMeal}</p>
                        </div>
                    )
                })}
            </div>
            </>
        );
    }
}

export default New;
