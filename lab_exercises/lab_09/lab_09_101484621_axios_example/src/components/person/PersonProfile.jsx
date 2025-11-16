import { useLocation, Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function PersonProfile() {
  const { state } = useLocation();
  const person = state?.person;

  if (!person) {
    return (
      
      <div className="container mt-5">
        
        <h3>No user selected.</h3>
        <Link to="/" className="btn btn-primary mt-3">Back</Link>
        
      </div>

    );
  }

  return (
  <div className="container mt-5 d-flex justify-content-center">
    
    <Card style={{ maxWidth: "400px", padding: "20px" }} className="shadow">
      <Card.Body className="text-center">

        <h2>{person.name.first} {person.name.last}</h2>

        <img
          src={person.picture.large}
          alt="User"
          className="rounded-circle mt-3 mb-3"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />

        <p><strong>Email:</strong> {person.email}</p>
        <p><strong>Gender:</strong> {person.gender}</p>
        <p><strong>Phone:</strong> {person.phone}</p>

        <Link to="/" className="btn btn-success mt-3">
          Back To List
        </Link>

      </Card.Body>
    </Card>

  </div>
);
}

export default PersonProfile;
