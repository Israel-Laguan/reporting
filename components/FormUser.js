import React, { useState } from "react";
import Link, { Router } from "next/link";
import useForm from "../utilities/useForm";
import withAuth from "../utils/withAuth";
import swal from "sweetalert";

const FormUser = ({ initialValues = {}, auth }) => {
  const form = useForm({ initialValues });

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": auth.getToken()
    };
    const options = {
      method: "POST",
      body: JSON.stringify({
        ...form.fields
      })
    };
    const res = await fetch("https://etl-auth.herokuapp.com/api/v1/user", {
      ...options,
      headers
    }).then(res => {
      if (!res.ok)
        return {
          success: false,
          msg: res.statusText,
          errors: [res]
        };
      return res.json();
    });
    const { success, errors, msg, data } = res;
    if (!success) {
      swal("Error!", msg, "error");
    } else {
      swal("Correcto!", msg, "success").then(() => {
        Router.push("/users");
      });
    }
  };

  return (
    <form name="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">Nombre Completo</label>
        <input
          type="text"
          className="form-control"
          {...form.getInput("name")}
          id="firstName"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Email</label>
        <input
          type="email"
          className="form-control"
          {...form.getInput("email")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          {...form.getInput("password")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rol">Rol</label>
        <select className="form-control" {...form.getSelect("rol")} required>
          <option>ADMIN</option>
          <option>BOSS</option>
          <option>EMPLOYEE</option>
        </select>
      </div>

      <div className="form-group d-flex justify-content-center">
        <button className="btn btn-primary">Registrar</button>
        {"  "}
        <Link href="/report">
          <button className=" btn btn-secondary ml-3">Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default withAuth(FormUser);
