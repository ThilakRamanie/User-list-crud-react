import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUsers, deleteUser } from "../Slice/userSlice";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";

function UserList() {
  const users = useSelector(selectUsers);
  const {userName} = useContext(UserContext)
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    if (window.confirm("Deleting the user ?")) {
      dispatch(deleteUser({ id }));
    }
  };
  if (users.length <= 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="center">No user found!</h1>
        <Link to="/add-user">
          <Button className="">Create One</Button>
        </Link>
      </div>
    );
  }
  const renderUser = () => {
    return users.map((user) => (
      <Col sm={12} md={6} lg={4} className="mb-2" key={user.id}>
        <Card>
          <Card.Img
            variant="top"
            style={{ objectFit: "cover", height: "200px" }}
            src={user.photo}
          />
          <Card.Body>
            <Card.Title>
              {user.firstName} {user.lastName}
            </Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
          {/* <ListGroup className="list-group-flush">
              {user.skills.map((skill)=> (
                <ListGroup.Item>{skill}</ListGroup.Item>
              ))}
            </ListGroup> */}
          <Card.Body>
            <Link to={`/edit-user/${user.id}`}>
              <Button variant="outline-primary">Update</Button>
            </Link>
            <Button
              className="m-1"
              onClick={() => handleRemoveUser(user.id)}
              variant="outline-danger"
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };
  return (
    <div>
      <Container className="mt-4">
        <h2>Users List</h2>
        <p>Value received using context api: {userName}</p>
        <Row>
          {users ? renderUser() : <h1 className="center">No user found!</h1>}
        </Row>
      </Container>
    </div>
  );
}

export default UserList;
