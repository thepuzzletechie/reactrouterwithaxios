import React, { useEffect, useState } from "react";
import Axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gettingdata = () => {
      Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    };
    gettingdata();
  }, []);

  return loading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      {data.map((user) => (
        <div className="post card" key={user.id}>
          <div className="card-content">
            <span className="card-title">{user.title}</span>
            <p>{user.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
