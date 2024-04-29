import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner-outer w-full">
      <div className="container">
        <div className="banner">
          <div className="left ">
            <div className="image">
              <img src="/public/images/man_left.svg" alt="" />
            </div>
          </div>
          <div className="mid">
            <div className="mid-top">
              <img src="/public/images/4g.svg" alt="" />
            </div>
            <div className="mid-mid">
              <h1>Ultimate</h1>
              <h2>Sale</h2>
              <Link to="/products#products" className="button">
                SHOP NOW
              </Link>
            </div>
            <div className="mid-end">
              <img src="/public/images/2g.svg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="/public/images/man_right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
