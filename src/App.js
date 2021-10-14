import React, { useState, useEffect } from "react";
import "./App.scss";

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dob, setDob] = useState("");
  const [reg, setReg] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((res) => {
        setData(res.results[0]);

        let date = res.results[0].dob.date.substring(0, 10);
        setDob(date);

        let register = res.results[0].registered.date.substring(0, 10);
        setReg(register);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="load">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="details">
          <img src={data?.picture?.large} alt="img" />
          <div className="card">
            <div className="card-inner">
              <div className="card-back">
                <h3>
                  {data?.name?.title} {data?.name?.first} {data?.name?.last}
                </h3>
                <h4>{data?.gender}</h4>
                <p>
                  {data?.location?.street.number}, {data?.location?.street.name}
                  , {data?.location?.city}, {data?.location?.state},{" "}
                  {data?.location?.country}, ({data?.location?.postcode})
                </p>
                <p>Phone - {data?.phone}</p>
                <p>Mobile - {data?.cell}</p>
                <p>Email - {data?.email}</p>
              </div>
              <div className="card-front">
                <h3>
                  {data?.name?.title} {data?.name?.first} {data?.name?.last}
                </h3>
                <h6>DOB - {dob}</h6>
                <h6>Age - {data?.dob?.age} years</h6>
                <br />
                <h5>Registered on - {reg} </h5>
                <h5>Member since - {data?.registered?.age} years</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
