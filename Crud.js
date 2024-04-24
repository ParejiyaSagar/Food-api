import React from 'react';

class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mydata:[],
            text:'',
            mon:'',
            email:'',
            gen:'', 
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { text, mon, email, gen, mydata } = this.state;
        const newData = {
            name: text,
            mobile: mon,
            email: email,
            gender: gen
        };
        this.setState({
            mydata: [...mydata, newData],
            text: '',
            mon: '',
            email: '',
            gen: ''
        });
    }

      

    render() {
        return (
          <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>CRUD Application</h1>
            <form onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>Enter Name:</label>
              <input type='text' placeholder='Enter Name' value={this.state.text} onChange={(e)=>this.setState({text:e.target.value})} style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }} /><br />
              <label style={{ display: 'block', marginBottom: '10px' }}>Mobile:</label>
              <input type='text' placeholder='Enter Mobile' value={this.state.mon} name="mon" onChange={(e)=>this.setState({mon:e.target.value})} style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }} /><br />
              <label style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
              <input type='email' placeholder='Enter Email' value={this.state.email} name="email" onChange={(e)=>this.setState({email:e.target.value})} style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }} /><br />
              <label style={{ display: 'block', marginBottom: '10px' }}>Gender:</label>
              <input type='radio' name="gen" value="male" checked={this.state.gen === "male"} onChange={(e)=>this.setState({gen:e.target.value})}/>Male
              <input type='radio' name="gen" value="female" checked={this.state.gen === "female"} onChange={(e)=>this.setState({gen:e.target.value})}/>Female<br />
              <input type='submit' value="submit" style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer',border:"2px solid black" }} />
            </form>

            <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Index</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Mobile</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Gender</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mydata.map((value,i)=>{
                  return(
                    <tr key={i+1}>
                     <td style={{ padding: '10px' }}>{i+1}</td>
                      <td style={{ padding: '10px' }}>{value.name}</td> 
                      <td style={{ padding: '10px' }}>{value.mobile}</td> 
                      <td style={{ padding: '10px' }}>{value.email}</td> 
                      <td style={{ padding: '10px' }}>{value.gender}</td> 
                      <td><input type='button' value="delete" style={{background:"red"}}/></td>
                      <td><input type='button' value="Edit"/></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        );
    }
}

export default Crud;
