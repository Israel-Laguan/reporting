import React, {useState} from "react";
import Header from "../components/Header";
import BodyListReport from "../components/BodyListReport";
import withAuth from "../utils/withAuth";

const Home = ({auth}) => {
  const [reports, setReports] = useState([])
  const [errors, setErrors] = useState([])
  React.useEffect( () => {
    async function fetchReports(){
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      headers['x-access-token'] = auth.getToken();
      const res = await fetch('http://localhost:8000/api/v1/report/all', {headers})
      const { success, errors, msg, data } = await res.json()
      if (!success) {
        console.error(msg, errors)
        setErrors(errors)
      }
      setReports(data)
    }
    fetchReports();
  }, [])
  
  return (
  <div>
    <Header createReport users auth={auth}/>
    <BodyListReport data={reports}/>
  </div>
);}
{
  /* <BodyListReport data={[]} /> */
}
BodyListReport.defaultProps = {
  data: [
    {
      report_id: '0',
      invoice_id: 1,
      client: "nisira",
      updated_at: "16/03/2020"
    },
  ]
};

export default withAuth(Home)
