
import React,{useState,useEffect} from 'react'
import {Row,Col}from 'react-bootstrap'
import Restaurants from'./Restaurants';



function Home() {

    const[hotels,setHotels]=useState([]);
    const[filter,setFilter]=useState("");

    useEffect(()=> {
        const fetchData=async()=>{
            await fetch('/restaurants.json')
            .then(res=>res.json())
            .then(data=>{
                setHotels(data.restaurants)
            })
        }
        fetchData();
    },[])
    console.log('data is',hotels);


    return (
        <Row>
            
             <input
             value={filter}
            placeholder="search a location"
            type="text"
            onChange={event=>setFilter(event.target.value)}/> 
             
             
          { hotels ?
           
               (hotels.filter(item=>{
                   if(filter===" "){
                       return item
                   }
                   else if(item.neighborhood.toLowerCase().includes(filter.toLocaleLowerCase()))
                   {
                       return item
                   }
               })
           
               .map(item=>(
                   <Col sm={12} md={8} lg={6} xl={3}>
                   <Restaurants data={item}/>
                   </Col>
               )))
            :"error"
               }
        </Row>
    )
}

export default Home
