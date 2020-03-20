import React from "react";
import Home from "./home"
import withAuth from "../utils/withAuth";

const Home = () => (
  <div>
    <Header createReport users />
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
      client: "Israel",
      lastUpdate: "16/03/2020"
    },
    {
      reportId: 2,
      invoiceId: "00000002",
      client: "Juan Jose Silupu",
      lastUpdate: "16/03/2020"
    },
    {
      reportId: 3,
      invoiceId: "00000003",
      client: "Servicios Azuar SAC",
      lastUpdate: "16/03/2020"
    }
};

export default withAuth(App)
