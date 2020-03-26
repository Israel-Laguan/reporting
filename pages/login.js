import React from "react";
import Link from "next/link";
import withAuth from "../utils/withAuth";
import Router from "next/router";
import swal from "sweetalert";
import { Spinner } from 'reactstrap'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false,
      msg: "",
      errors: [],
      submitting: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ ...this.state, submitting: true });
    const { email, password } = this.state;
    if (email && password) {
      const { success, msg, errors } = await this.props.auth.login(
        email,
        password
      );
      if (!success) {
        console.error("error", errors);
        this.setState({
          submitting: false,
          submitted: true,
          errors,
          msg
        });
        return errors.forEach(error => swal("Error!", error.msg, "error"));
      }
      return Router.push("/");
    }
    return this.setState({ ...this.state, submitting: false, submitted: true, email: "", password: "" });
  }

  render() {
    const {
      auth: { loggingIn }
    } = this.props;
    const { email, password, submitted, submitting } = this.state;
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="col-md-6 mx-auto">
            <h2>Iniciar sesion</h2>
            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  "form-group" + (submitted && !email ? " has-error" : "")
                }
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
                {submitted && !email && (
                  <p className="text-danger">Email es requerido</p>
                )}
              </div>
              <div
                className={
                  "form-group" + (submitted && !password ? " has-error" : "")
                }
              >
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  minLength="8"
                  required
                />
                {submitted && !password && (
                  <p className="text-danger">Contraseña es requerida</p>
                )}
              </div>
              <div className="form-group d-flex justify-content-center">
                <button className="btn btn-primary">
                  Ingresar
                  {submitting && (
                    <span className="ml-3">
                      <Spinner size="sm" color="light" />
                    </span>
                    
                  )}
                </button>
                {/*

                <Link href="/register">
                  <a
                    type="button"
                    href="/register"
                    className="btn btn-link ml-3"
                    role="button"
                  >
                    Ir a Registrar
                  </a>
                </Link>
                */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginPage);
