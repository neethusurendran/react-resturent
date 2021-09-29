import React, { useEffect, useState } from 'react'
import { Row,Col,Image,Card,ListGroup } from 'react-bootstrap';

function RestaurantDetails({match}) {

    const[data,Setdata]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            await fetch('/restaurants.json')
            .then(res=>res.json())
            .then(data=>{
                Setdata(data.restaurants)
            })
        }
        fetchData();
    },[])
    const details=data.find((i)=>i.id == match.params.id)
    console.log('data',details);
    return (
         <>
         { details ?(
            <Row className="my-3">
            <Col md={3}>
                <Image className="img" src={details.photograph} alt={details.name} fluid/>
            </Col>
            <Col md={4}>
                <ListGroup.Item>
                    <h2>{details.name}</h2>
                    <p>{details.neighborhood}</p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <p><strong>Cusine:</strong>{details.neighborhood}</p>
                </ListGroup.Item>
                
                <ListGroup.Item>
                <p><strong>Cusine:</strong>{details.neighborhood}</p>
                </ListGroup.Item>
                </Col>
                <Col md={4}>
                    <ListGroup.Item>
                        <h4>Opening Hours</h4>
                        <p>Monday:{details.operating_hours.Monday}</p>
                        <p>Monday:{details.operating_hours.Tuesday}</p>
                        <p>Monday:{details.operating_hours.Wednesday}</p>
                        <p>Monday:{details.operating_hours.Thursday}</p>
                        <p>Monday:{details.operating_hours.Friday}</p>
                        <p>Monday:{details.operating_hours.Saturday}</p>
                        <p>Monday:{details.operating_hours.Sunday}</p>
                        </ListGroup.Item>
                        </Col>
                        <Row>
                            <Card className="my-3 mx-3 p-3 rounded card"></Card>
                        </Row>
                        </Row>
                       
              ):null }
              </>
              
        )
}

                   



                
        

export default RestaurantDetails
