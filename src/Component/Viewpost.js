import React, { useEffect, useState } from "react";

const Viewpost = () => {
  const [data, setData] = useState([]);
  console.log("data", data);
  const url = "http://localhost:8000/users";

  const getData = async () => {
    const responce = await fetch(url);
    const collectedItem = await responce.json();
    console.log("collecteditems", collectedItem);
    setData(collectedItem);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
      
        {data.map((items) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card m-1">
                <div key={items.id}>
                  <h1>{items.first_name}</h1>
                  <h2>{items.last_name}</h2>
                  <p>{items.email}</p>
                </div>
                <div className="d-flex justify-content-center pb-3">
                <button className="btn btn-outline-danger btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Viewpost;
