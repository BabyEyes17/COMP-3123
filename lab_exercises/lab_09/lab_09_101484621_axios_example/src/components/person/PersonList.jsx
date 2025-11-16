import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from "react-bootstrap";
import { nav } from "../../nav";


class PersonList extends Component {
    
    // Define state default values
    state = {
        persons: []
    }

    // Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    render() {
        return (

            <div className="container mt-4">
                <h2>Person List</h2>

                {this.state.persons.map((person, index) => (
                    
                    <Card 
                    className="mb-4 shadow" 
                    key={index} 
                    
                    style = {{ 
                        backgroundColor: "#27838fff", 
                        color: "white", 
                        textAlign: "left", 
                        padding: "4px", 
                        margin: "32px",
                        borderRadius: "32px"}}>
                        
                        <Card.Body>
                            

                            <Row>

                                <h3>{person.name.title} {person.name.first} {person.name.last}</h3>
                                <h5>{person.login.uuid}</h5>

                            </Row>

                            <Row style={{paddingTop: "16px"}}>
                                
                                
                                
                                <Col md={3}>
                                    
                                    <img 
                                        src = {person.picture.large} 
                                        alt = "User" 
                                        style = {{ borderRadius: "50%", width: "150px", height: "150px" }}
                                    />

                                    <br></br>
                                    <br></br>

                                    <div >
                                        <Button onClick={() => this.props.navigate("/profile", { state: { person } })}>Profile</Button>
                                    </div>

                                </Col>



                                <Col md={9} style={{lineHeight: "8px"}}>
                                
                                    

                                    <p><strong>User Name: </strong> {person.login.username}</p>
                                    <p><strong>Gender: </strong> {person.gender}</p>
                                    <p><strong>Time Zone Description: </strong> {person.location.timezone.description}</p>
                                    
                                    <p><strong>Address: </strong> 
                                        {person.location.street.number} {person.location.street.name}, 
                                        {person.location.city}, 
                                        {person.location.state}, 
                                        {person.location.country} - {person.location.postcode}
                                    </p>

                                    <p><strong>Email: </strong> {person.email}</p>
                                    <p><strong>Birth Date and Age: </strong> {person.dob.date} ({person.dob.age})</p>
                                    <p><strong>Register Date: </strong> {person.registered.date}</p>
                                    <p><strong>Phone: </strong> {person.phone}</p>
                                    <p><strong>Cell: </strong> {person.cell}</p>

                                </Col>



                            </Row>
                        </Card.Body>
                    </Card>
                ))}
            </div>


        );
    }
}

export default nav(PersonList);
