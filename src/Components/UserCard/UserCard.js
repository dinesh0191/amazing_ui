import React from "react";
import "./UserCard.scss";
import { Carousel } from "antd";

const UserCard = ({ data, dob, reg }) => {
  const { title, first, last } = data?.name;
  const { number, name } = data?.location?.street;
  const { city, state, country, postcode } = data?.location;

  return (
    <div className="container">
      <div className="details">
        <img src={data?.picture?.large} alt="img" />
        <div className="card">
          <div className="card-inner">
            <Carousel autoplay dots={false}>
              <div className="card-front">
                <h3>
                  {title} {first} {last}
                </h3>
                <h6>DOB - {dob}</h6>
                <h6>Age - {data?.dob?.age} years</h6>
                <br />
                <h5>Registered - {reg} </h5>
                <h5>Member since - {data?.registered?.age} years</h5>
              </div>
              <div className="card-back">
                <h3>
                  {title} {first} {last}
                </h3>
                <h4>{data?.gender}</h4>
                <p>
                  {number}, {name}, {city}, {state}, {country}, ({postcode})
                </p>
                <p>Phone - {data?.phone}</p>
                <p>Mobile - {data?.cell}</p>
                <p>Email - {data?.email}</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
