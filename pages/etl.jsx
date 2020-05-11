import React, { useState } from "react";
import Link from 'next/link'
import Header from "../components/Header";
import withAuth from "../utils/withAuth";
import fetch from 'node-fetch'

import {
  Jumbotron,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import swal from "sweetalert";

const ELT = props => {
  const [modalRepli, setModalRepli] = useState(false);
  const [modalDB, setModalDB] = useState(false);
  const [modalCredentials, setModalCredentials] = useState(false);
  const [credentials, setCredentials] = useState(false);
  const [dataDB, setDataDB] = useState({})

  const toggleDB = () => setModalDB(!modalDB);
  const toggleRepli = () => setModalRepli(!modalRepli);
  const toggleCredentials = () => setModalCredentials(!modalCredentials);

  const submitCredentials = (e) => {
    e.preventDefault();
    const data = e.target;
    const formData = {
      host: data.host.value,
      database: data.database.value,
      user: data.user.value,
      password: data.password.value,
      port: data.port.value,
    }
    setDataDB(formData)
    toggleDB(false)
  }

  const getUserData = () => {
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("id_token");

    if (!user_id || !access_token) {
      let msg = "Su sesion ha expirado";
      swal("Error!", msg, "error");
      props.auth.logout();
      return window.location.reload();
    }

    return {
      user_id,
      access_token
    };
  };
  const handleRepliDW = async () => {
    try {
      const response = getUserData();
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': response.access_token
      }
      const options = { method: 'POST', headers, body: JSON.stringify(dataDB) }
      const res = await fetch(
        'http://localhost:8080/export',
        options,
      )
      console.log(res)
      const { error, ok, errors, msg, data } = await res.json()
      if (!ok || error) {
        console.error(error, msg, errors)
        return swal('Error!', msg, 'error')
      }
      console.log(msg, data)
      toggleRepli();
      swal("Correcto!", msg, "success");
    } catch (error) {
      const msg = "Ocurrió un error inesperado, por favor, intente más tarde";
      swal("Error!", msg, "error");
    }
  };
  const handleCredentials = async () => {
    const response = getUserData();
    try {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      headers['x-access-token'] = response.access_token
      const res = await fetch(
        'https://etl-server.herokuapp.com/credentials',
        { headers },
      )
      const { ok, errors, msg, data } = await res.json()
      if (!ok) {
        console.error(msg, errors)
        return swal('Error!', msg, 'error')
      }
      setCredentials(data.DW);

      toggleCredentials();
    } catch (error) {
      console.error(error)
      const msg = "Ocurrió un error inesperado, por favor, intente más tarde";
      swal("Error!", msg, "error");
    }
  };
  return (
    <>
      <Header auth={props.auth} />
      <Jumbotron>
        <Container>
          <div className="d-flex justify-content-around">
            <div>
              <h2>Bienvenido al DataWarehouse</h2>
            </div>
            <div>
              <Button name="dwRepli" onClick={toggleDB} color="info">
                Seleccionar DB
              </Button>
            </div>
            <div>
              <Button name="dwRepli" onClick={toggleRepli} color="info">
                Replicar a DW
              </Button>
            </div>
            <div className="px-3">
              <Button
                name="dwCredentials"
                onClick={handleCredentials}
                color="info"
              >
                Credenciales de DW
              </Button>
            </div>
          </div>
        </Container>
        <section className="mt-5 p-5">
        <Link href={`/`}>
          <Button className="ml-5 mb-5 mt-5" color="primary" size="lg">
            ⬅️ Volver
          </Button>
        </Link>
        </section>

        <Modal isOpen={modalDB} toggle={toggleDB}>
          <ModalHeader toggle={toggleDB}>
          Ingrese las credenciales de la instancia de Base de Datos a ser exportada:
          </ModalHeader>
          <ModalBody>
            <form name="form" className="form" onSubmit={submitCredentials}>
              <div className="form-group">
                <label htmlFor="host">Identificador de la Instancia (HOST)</label>
                <input
                  type="text"
                  className="form-control"
                  
                  id="host"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="database">Nombre de la base de datos (DATABASE)</label>
                <input
                  type="text"
                  className="form-control"
                  
                  id="database"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user">Nombre del usuario maestro (USER)</label>
                <input
                  type="text"
                  className="form-control"
                  
                  id="user"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña maestra (PASSWORD)</label>
                <input
                  type="text"
                  className="form-control"
                  
                  id="password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="port">Puerto de conexión (PORT)</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={5432}
                  id="port"
                />
              </div>
              <Button type="submit" color="warning">
                Seleccionar esta DB
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleDB}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={modalRepli} toggle={toggleRepli}>
          <ModalHeader toggle={toggleRepli}>
          Confirme si quiere exportar esta DB
          </ModalHeader>
          <ModalBody>
            {dataDB.database ? dataDB.database : "No has puesto las credenciales!" }
          </ModalBody>
          <ModalFooter>
          {dataDB.database &&
            <Button color="warning" onClick={handleRepliDW}>
              Exportar desde esta DB
            </Button>
          }
            <Button color="danger" onClick={toggleRepli}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {activeModalCredentials(
          modalCredentials,
          toggleCredentials,
          credentials
        )}
      </Jumbotron>
    </>
  );
};

const activeModalCredentials = (
  modalCredentials,
  toggleCredentials,
  credentials
) => {
  if (!credentials) {
    credentials = {
      credentials1: "Credencial 1",
      credentials2: "Credencial 2"
    };
  }
  return (
    <Modal isOpen={modalCredentials} toggle={toggleCredentials}>
      <ModalHeader toggle={toggleCredentials}>
        Estas son sus credenciales
      </ModalHeader>
      <ModalBody>
        {Object.entries(credentials).map((pair, id) => {
          return <div key={id}>
            <h3>{pair[0]}:</h3>
            <kbd>{pair[1]}</kbd>
          </div>;
        })}
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggleCredentials}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default withAuth(ELT);
