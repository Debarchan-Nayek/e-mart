import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { listUsers, deleteUser } from "../../actions/userAction";
import { FaCheck, FaTimes, FaEdit, FaTrash } from "react-icons/fa";


const UserListPage = ({history}) => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const { loading, error, users} = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete} = userDelete

    useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
        dispatch(listUsers());
      } else {
        history.push("/login");
      }
    }, [dispatch, history, successDelete, userInfo]);

    const deleteHandler = (id) => {
      if(window.confirm('Are you sure?')){
        dispatch(deleteUser(id));
      }
    }

    return (
      <>
        <h1>Users</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL ID</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <Nav.Link>
                        <FaCheck style={{ color: "green" }} />
                      </Nav.Link>
                    ) : (
                      <Nav.Link>
                        <FaTimes style={{ color: "red" }} />
                      </Nav.Link>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      style={{ color: "red" }}
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    );
}

export default UserListPage;