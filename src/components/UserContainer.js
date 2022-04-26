import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ loading, users, error, fetchData }) {
  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div className="userCon">
      <h1>Users</h1>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.users.loading,
    users: state.users.users,
    error: state.users.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
