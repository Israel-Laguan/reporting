import React, {useState} from "react";
import Header from "../components/Header";
import BodyListReport from "../components/BodyListReport";
import withAuth from "../utils/withAuth";

const Home = ({auth}) => {
  const [load, setLoad] = useState(true);
  const [reports, setReports] = useState([])
  const [errors, setErrors] = useState([])
  
  React.useLayoutEffect( () => {
    setLoad(true);
    async function fetchReports(){
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      headers['x-access-token'] = auth.getToken();
      const res = await fetch('https://etl-auth.herokuapp.com/api/v1/report/all', {headers});
      setLoad(false)
      const { ok, errors, msg, data } = await res.json()
      if (!ok) {
        console.error(msg, errors)
        return setErrors(errors)
      }
      setReports(data)
    }
    fetchReports();
  }, [])
  
  return (
    
    <div>
    <Header createReport users auth={auth}/>    
    <BodyListReport load={load} data={reports} auth={auth}/>
    
    </div>
    
);}

export default withAuth(Home)
