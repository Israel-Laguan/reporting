import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import useForm from '../utilities/useForm'
import withAuth from '../utils/withAuth'
import swal from 'sweetalert'
import {Spinner} from 'reactstrap'

const FormUser = ({ initialValues = {}, auth, edit }) => {
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [load, setLoad] = React.useState(true)
  const form = useForm({ initialValues })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoad(true);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': auth.getToken(),
    }
    const options = {
      method: edit ? 'PUT' : 'POST',
      body: JSON.stringify({
        ...form.fields,
      }),
    }
    const url = edit
      ? `https://etl-auth.herokuapp.com/api/v1/user/${initialValues.email &&
          initialValues._id}`
      : 'https://etl-auth.herokuapp.com/api/v1/user'
    const res = await fetch(url, {
      headers,
      ...options,
    }).then(res => res.json())
    const { ok, errors, msg } = res
    if (!ok) {
      console.error(errors)
      swal('Error!', msg, 'error')
    } else {
      swal('Correcto!', msg, 'success').then(() => {
        Router.push('/users')
      })
    }
  }

  React.useEffect(() => {
    const userRole = localStorage.getItem('user_role')
    if (userRole === 'ADMIN') setIsAdmin(true)
  }, [])

  return (
    <form name="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          className="form-control"
          {...form.getInput('name')}
          id="name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          {...form.getInput('email')}
          id="email"
          required
        />
      </div>
      {isAdmin && (
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            {...form.getInput('password')}
            minLength="8"
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="role">Rol</label>
        <select
          className="form-control"
          {...form.getSelect('role')}
          required
          defaultValue="EMPLOYEE"
        >
          {isAdmin && <option value="ADMIN">Administrador</option>}
          {isAdmin && <option value="BOSS">Jefe</option>}
          <option value="EMPLOYEE">Empleado</option>
        </select>
      </div>

      <div className="form-group d-flex justify-content-center">
        <button 
          className="btn btn-primary"
          disabled={load}
        >          
          <span className={load?null:'d-none'}>{initialValues ? 'Guardar' : 'Registrar'}</span>
          <span className={load?'d-none':null}><Spinner size="sm" color="light" /></span>
        </button>
        {'  '}
        <Link href="/">
          <button className=" btn btn-secondary ml-3">Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default withAuth(FormUser)
