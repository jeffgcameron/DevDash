import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Thumbnail from "../Thumbnail";
import MessageIcon from "../Message-Icon/messageIcon";
import GhIcon from "../Message-Icon/githubIcon";
import API from "../../utils/API";
import "./style.css";

function UserInfo(props) {
  const [user, setUser] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  const { id } = useParams();

  useEffect(() => {
    API.getUser(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
    console.log(id);
  }, [id]);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="sm-5"></Col>
          <Col size="sm-2">
            <Thumbnail
              src={
                user.thumbnail ||
                "data:image/png;base64,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"
              }
            />
          </Col>
          <Col size="sm-5"></Col>
        </Row>
        <Row>
          <Col size="sm-12" className="user-name">
            <h1>{user.name}</h1>
            <p>Proficient in {user.languages}</p>
          </Col>
          </Row>
          <Row>
            <Col size="sm-1"></Col>
            <Col size="sm-5">
              <h4>Bio:</h4>
              <div className="card-container">
                <div className="card info-card">
                  <p>{user.bio}</p>
                </div>
              </div>
             
            </Col>
            <Col size="sm-5">
              <h4>Goals:</h4>
              <div className="card-container">
                <div className="card info-card">
                  <p>{user.goals}</p>
                </div>
              </div>
              
            </Col>
        </Row>
        <Row>
            <Col size="sm-1"></Col>
            <Col size="sm-5">
              
              <h4>Strengths:</h4>
              <div className="card-container">
                <div className="card info-card">
                  <p>{user.strengths}</p>
                </div>
              </div>
            </Col>
            <Col size="sm-5">
              
              <h4>Weaknesses:</h4>
              <div className="card-container">
                <div className="card info-card">
                  <p>{user.weaknesses}</p>
                </div>
              </div>
            </Col>
        </Row>
        <Row className="buttonRow" style={{'justify-content':"center"}}>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"><Link to='#'
              onClick={(e) => {
                window.location = "mailto:" + user.email;
                e.preventDefault();
              }}>
        
              <MessageIcon />
            </Link></Col>
          <Col size="sm-1"><Link to='#'
              onClick={(e) => {
                e.preventDefault();
                // <a href="https://github.com">github</a>
                console.log("clicked")
                window.open("https://github.com/" + user.github, "_blank")
                // window.location.href="https://github.com/" + user.github;
              }}>
              <GhIcon />
            </Link></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
          <Col size="sm-1"></Col>
        
            
            
            </Row>
          <br></br>
        <Link to="/user">← Back to Directory</Link>
      </Container>
    </div>
  );
}

export default UserInfo;
