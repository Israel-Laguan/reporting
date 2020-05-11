import React, { useState } from 'react'
import Header from '../../components/Header'
import BodyReport from '../../components/BodyReport'
import withAuth from '../../utils/withAuth'
import { useRouter } from 'next/router'

const Report = ({ auth }) => {
  const router = useRouter()
  const { id } = router.query
  const [reports, setReports] = useState([])
  const [errors, setErrors] = useState([])

  React.useEffect(() => {
    async function fetchReports() {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      headers['x-access-token'] = auth.getToken()
      const res = await fetch(`https://etl-authorize.herokuapp.com/api/v1/report/${id}`, {
        headers,
      })
      const { ok, errors, msg, data } = await res.json()
      if (!ok) {
        console.error(msg, errors)
        setErrors(errors)
      }
      setReports(data[0])
    }
    if (id && id !== '0') fetchReports()
  }, [id])

  return (
    <>
      <Header editReport={id} auth={auth} />
      <BodyReport data={reports} />
    </>
  )
}

export default withAuth(Report)
