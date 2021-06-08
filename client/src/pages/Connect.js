import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import SearchButton from "../components/SearchButton";
import API from "../utils/API";
import { UserList, UserListItem } from "../components/Directory";
import { Container, Row, Col } from "../components/Grid";
import Navbar from "../components/Navbar/navbar"
import Logo from "../components/DevDash-Logo/devlogo"

function Connect() {

  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    API.getUsers(userSearch)
   .then(res => setUsers(res.data))
   .catch(err => console.log(err));
  }, []);


  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setUserSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getUsers(userSearch)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container>
      <Logo />
        <Row><h1 className="text-center">Who would you like to connect with?</h1> </Row>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10 md-3">
                    <SearchForm
                      name="UserSearch"
                      value={userSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a User"
                    />
                  </Col>
                  <Col size="xs-3 sm-2 md-2">
                    <SearchButton
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </SearchButton>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!users.length ? (
              <h1 className="text-center">No users to Display</h1>
            ) : (
              <UserList>
                {users.map(users => {
                  return (
                    <UserListItem
                      key={users.name}
                      name={users.name}
                      languages={users.languages}
                      thumbnail={users.thumbnail}
                      bio={users.bio}
                      strengths={users.strengths}
                    />
                  );
                })}
              </UserList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Connect;
