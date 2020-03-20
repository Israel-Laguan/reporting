import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        registering: false,
      },
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const { user } = this.state
    if (user.name && user.email && user.password) {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      const options = {
        method: 'POST',
        body: JSON.stringify({
          ...user,
        }),
      }
      const res = await fetch('http://localhost:8000/api/v1/auth/signup', {
        ...options,
        headers,
      }).then(res => {
        if (!res.ok) return {
          success: false,
          msg: res.statusText,
          errors:[res]
        }
        return res.json()
      })
      const { success, errors, msg, data } = res
      if (!success) {
        console.error(msg, errors)
        this.setState({ ...this.state, registering: false })
      } else {
        console.log(res)
        return Router.push('/login')
      }
    }
    this.setState({ submitted: true })
  }

  render() {
    const { user, submitted, registering } = this.state
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="col-md-6 mx-auto">
            <h2>Registro</h2>
            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  'form-group' + (submitted && !user.name ? ' has-error' : '')
                }
              >
                <label htmlFor="firstName">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={this.handleChange}
                />
                {submitted && !user.name && (
                  <p className="text-danger">Nombre es requerido</p>
                )}
              </div>
              <div
                className={
                  'form-group' + (submitted && !user.email ? ' has-error' : '')
                }
              >
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={this.handleChange}
                />
                {submitted && !user.email && (
                  <p className="text-danger">Email es requerido</p>
                )}
              </div>
              <div
                className={
                  'form-group' +
                  (submitted && !user.password ? ' has-error' : '')
                }
              >
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={this.handleChange}
                />
                {submitted && !user.password && (
                  <p className="text-danger">Contraseña es requerido</p>
                )}
              </div>
              <div className="form-group d-flex justify-content-center">
                <button className="btn btn-primary">Registrar</button>
                {registering && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )}
                {'  '}
                <Link href="/login">
                  <a type="button" className="btn btn-danger ml-3">
                    Cancel
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterPage
