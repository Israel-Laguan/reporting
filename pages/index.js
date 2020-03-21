import React from "react";
import Header from "../components/Header";
import BodyListReport from "../components/BodyListReport";
import withAuth from "../utils/withAuth";

const Home = ({auth}) => (
  <div>
    <Header createReport users auth={auth}/>
    <BodyListReport />
  </div>
);
{
  /* <BodyListReport data={[]} /> */
}
BodyListReport.defaultProps = {
  data: [
    {
      reportId: 1,
      invoiceId: "00000001",
      client: "nisira",
      lastUpdate: "16/03/2020"
    },
  ]
};

export default withAuth(Home)
