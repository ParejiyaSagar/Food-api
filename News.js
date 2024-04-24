import axios from 'axios';
import React, { useEffect } from 'react'

export default function News() {
    const[user,setUser]=React.useState([]);
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-02-06&sortBy=publishedAt&apiKey=f49cf5c9c425497195f1ec4776e07a3e")
        .then(res=>{
            setUser(res.data.articles)
        })
    },[])
    
  return (
   <>
    <h1 style={{textAlign:'center'}}>News app</h1>
   <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {user.map((value,index)=>{

            return(
<div class="col" key={index+1}>
          <div class="card shadow-sm">
          <img src={value.urlToImage} width={500} height={200}></img>
            <div class="card-body">
                
              <p class="card-text">"Nach dem mutmaßlichen Brandanschlag auf die Stromversorgung nahe dem Tesla-Werk im brandenburgischen Grünheide prüft die Polizei ein Bekennerschreiben. Die Echtheit des auf einer Internetplattform veröffentlichten Schreibens der \"Vulkangruppe Tesla abschalten…</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
            )
        })}
        
       
      </div>
    </div>
  </div>
   
   </>
  )
}
