import React from "react";
import Link from "next/link";
import withAuth from "../utils/withAuth";
import Router from "next/router";
import swal from "sweetalert";

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
        console.log("error", errors);
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
    this.setState({ ...this.state, submitting: false });
    return this.setState({ submitted: true, email: "", password: "" });
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
                  minlength="8"
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
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}
                </button>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginPage);
