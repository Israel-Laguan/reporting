import React, {useState} from "react";
import Link from 'next/link'
import { Jumbotron, Container, Button } from "reactstrap";
import Header from "../../components/Header";
import FormMain from "../../components/FormMain";
import withAuth from "../../utils/withAuth";
import { useRouter } from 'next/router'

const Edit = ({auth}) => {
  const router = useRouter()
  const { id } = router.query
  const [report, setReport] = useState([])
  const [errors, setErrors] = useState([])

  React.useEffect(() => {
    async function fetchReports() {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      headers['x-access-token'] = auth.getToken()
      const res = await fetch(`https://etl-auth.herokuapp.com/api/v1/report/${id}`, {
        headers,
      })
      const { success, errors, msg, data } = await res.json()
      if (!success) {
        console.error(msg, errors)
        setErrors(errors)
      }
      setReport(data[0])
    }
    if (id && id !== '0') fetchReports()
  }, [id])
  return (
    <>
      <Header auth={auth}/>
      <Jumbotron fluid>
        <Container fluid>
          <FormMain invoice={report} auth={auth} edit={true}/>
        </Container>
        <Link href={`/`}>
          <Button className="ml-5 mb-5 mt-5" color="primary" size="lg">🔙 Volver</Button>
        </Link>{' '}
      </Jumbotron>
    </>
  );
};

export default withAuth(Edit);