import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both UsersList and UsersListItem from this file

// UserList renders a bootstrap list item
export function UserList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// UsersListItem renders a bootstrap list item containing data from the recipe api call
// if we do thumbnails this way, we need to add it to both schema and seed!!!
export function UserListItem({
  thumbnail,
  name,
  languages,
  bio,
  strengths
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://tse1.mm.bing.net/th?id=OIP.138SfxPGnhcpJW5kI3qlhwHaHa&pid=Api&P=0&w=300&h=300"} />
          </Col>
          <Col size="xs-8 sm-2">
            <h3>{name}</h3>
          </Col>
          <Col size="xs-8 sm-2">
            <h5>Bio:</h5>
            <p>{bio}</p>
          </Col>
          <Col size="xs-8 sm-2">
            <h5>Languages: </h5>
            <ul>
              {languages.map((languages) => (
                <li>{languages}</li>
              ))}
            </ul>
          </Col>
          <Col size="xs-8 sm-2">
            <h5>Strengths:</h5>
            <p>{strengths}</p>
          </Col>
          <Col size="xs-8 sm-2">
            <p>M Icon</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
