import React from "react";
import Header from "../components/Header";
import BodyReport from "../components/BodyReport";
import withAuth from "../utils/withAuth"

const Report = ({auth}) => (
  <>
    <Header editReport auth={auth} />
    <BodyReport />
  </>
);

export default withAuth(Report);
