import React, { useState } from "react";
import Link from "next/link";
import useForm from "../utilities/useForm";

const FormUser = ({ initialValues }) => {
  const form = useForm({ initialValues });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form.fields);
  };

  return (
    <form name="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">Nombres</label>
        <input
          type="text"
          className="form-control"
          {...form.getInput("firstName")}
          id="firstName"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          className="form-control"
          {...form.getInput("lastName")}
          id="lastName"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          className="form-control"
          {...form.getInput("username")}
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
          <option>Admin</option>
          <option>Super Admin</option>
          <option>Jefe</option>
        </select>
      </div>

      <div className="form-group d-flex justify-content-center">
        <button className="btn btn-primary">Registrar</button>
        {"  "}
        <Link href="/report">
          <button className=" btn btn-secondary">Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default FormUser;
