import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import UserCard from "./Components/UserCard/UserCard";
import { Spin, Space } from "antd";

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dob, setDob] = useState("");
  const [reg, setReg] = useState("");

  const fetchData = () => {
    setLoading(true);
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="load">
          <Space size="large">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          <Navbar fetchData={fetchData} data={data} />
          {data && <UserCard data={data} dob={dob} reg={reg} />}
        </>
      )}
    </>
  );
};

export default App;
