import React from "react";
import "../BusinessCard/Business.css";
import Card from "../CommonComponent/Card/Card";
import Button from "../CommonComponent/Button/Button";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const Business = () => {
  return (
    <>
      <div className="business">
        <div className="container">
          <div className="business__wraper">
            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>

            <Card
              className="business__card"
              CardTitle="Top 5 SaaS Businesses –August 2021"
              CardDetail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="card__btn">
                Read More <FaAngleRight className="cardRightArrow" />
                <FaAnglesRight className="dobble__arrow" />
              </Button>
            </Card>
          </div>
          <div className="page">
            <p>Previous</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>Next</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
