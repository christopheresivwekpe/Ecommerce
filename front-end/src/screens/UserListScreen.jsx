import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import {listUsers} from '../actions/userActions';

export default function UserListScreen(props) {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers())
    return () => {
    }
  }, [dispatch])
  
  return (
    <div>
      <h2>Users</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER NAME</th>
              <th>USER EMAIL</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}