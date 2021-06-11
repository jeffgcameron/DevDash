import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import "./style.css";

function UserInfo(props) {
  const [user, setUser] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  
  const {id} = useParams()
  useEffect(() => {
    API.getUser(id)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [id])

  return (
    <div>
      
      <Container fluid>
        <Row>
          <Col size="md-12" className="user-name">
           
            
              <h1>
                {user.name} by {user.email}
                
              </h1>
            
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {user.bio}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/user">← Back to Directory</Link>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }


export default UserInfo;