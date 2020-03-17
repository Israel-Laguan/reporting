import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonToggle,
  Row,
  Col
} from "reactstrap";
import Header from "../components/Header";
import BodyReport from "../components/BodyReport";

const Report = () => (
  <>
    <Header edit />
    <BodyReport />
  </>
);

export default Report;
