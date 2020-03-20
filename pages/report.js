import React from "react";
import Header from "../components/Header";
import BodyReport from "../components/BodyReport";
import withAuth from "../utils/withAuth"

const Report = () => (
  <>
    <Header editReport />
    <BodyReport />
  </>
);

export default withAuth(Report);
