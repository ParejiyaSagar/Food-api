import axios from 'axios';
import React from 'react';

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: [] };
    }

    componentDidMount() {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(res => {
                console.log(res.data);
                this.setState({ mydata: res.data.meals });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const styles = {
            table: {
                border: '1px solid #ddd', // Add a border around the table
                borderCollapse: 'collapse', // Collapse border spacing
                width: '100%', // Set table width to 100%
            }
        };

        return (
            <>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>strmeal</th>
                            <th>images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mydata.map((meals, i) => (
                            <tr key={i + 1}>
                                <td>{meals.idMeal}</td>
                                <td>{meals.strMeal}</td>
                                <td><img src={meals.strMealThumb} width={"100px"} alt={meals.strMeal} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Food;
