import {useState, useEffect} from "react";
import {getUsers} from "../../services/api/user";

const UserResults = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((json) => {
      setUsers(json);
    });
  },[]);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:gird-cols-2">
      {users.map((user:any) => (<h3>{user.login}</h3>))}
    </div>
  );
};

export default UserResults;