import { useState, useEffect } from "react";
import { createUsers } from "../../apis/users";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../apis/users";

const UserEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getUser(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
        
    User View
      <div className="mb-3">Name : {data.name}</div>
      <div className="mb-3">Email : {data.email}</div>
      <div className="mb-3">Phone : {data.phone}</div>
      <Link to={'/users'}>
      <button className="btn btn-secondary">Cancel</button>
      </Link>
    </div>
  );
};
export default UserEdit;
