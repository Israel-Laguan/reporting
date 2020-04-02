import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Header from "../components/Header";
import withAuth from "../utils/withAuth";
import { fetcher } from "../utils/fetcher";

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

//const style = {};

const mockSumaryData = {
  sumary1: "soy un sumary",
  sumary2: "soy una sumary",
  sumary3: "soy uno sumary",
  sumary4: "soy une sumary",
  sumary5: "soy unu sumary"
};

const ELT = props => {
  const [modalRepli, setModalRepli] = useState(false);
  const [modalCredentials, setModalCredentials] = useState(false);
  const [credentials, setCredentials] = useState(false);
  const [sumary, setSumary] = useState(false);

  const toggleRepli = () => setModalRepli(!modalRepli);
  const toggleCredentials = () => setModalCredentials(!modalCredentials);

  useEffect(() => {
    const getSumary = async () => {
      const sumary = await fetcher("/sumary");
      if (!sumary || !sumary.ok) {
        return setSumary(Object.values(mockSumaryData));
      }
      setSumary(sumary.data);
    };
    getSumary();
  }, []);

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
    const response = getUserData();
    try {
      let res = await fetcher("/replicate-dw", "POST", response);
      toggleRepli();

      if (!res.ok) throw new Error("Error al replicar DataWarehouse");

      let msg = "Datos replicados en DataWarehause correctamente";
      swal("Correcto!", msg, "success");
    } catch (error) {
      let msg = "Ocurrió un error inesperado, por favor, intente más tarde";
      swal("Error!", msg, "error");
    }
  };
  const handleCredentials = async () => {
    const response = getUserData();
    try {
      let res = await fetcher("/credentials", "POST", response);
      if (!res || !res.ok) throw new Error("Error al cargar credenciales");

      res = res ? res.data : res;
      setCredentials(res);

      toggleCredentials();
    } catch (error) {
      let msg = "Ocurrió un error inesperado, por favor, intente más tarde";
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
            <div className="">
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
          <div>
            {sumary
              ? sumary.map(e => (
                  <div>
                    <p>{`${e}`}</p>
                  </div>
                ))
              : null}
          </div>
        <Link href={`/`}>
          <Button className="ml-5 mb-5 mt-5" color="primary" size="lg">
            ⬅️ Volver
          </Button>
        </Link>
        </section>

        <Modal isOpen={modalRepli} toggle={toggleRepli}>
          <ModalHeader toggle={toggleRepli}>Confirmar</ModalHeader>
          <ModalBody>
            ¿Esta seguro que quiere replicar a DataWharehause?
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleRepliDW} color="primary">
              Aceptar
            </Button>{" "}
            <Button color="secondary" onClick={toggleRepli}>
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
        {Object.values(credentials).map((e, i) => {
          return <p key={i}>{`Credencial ${i + 1}: ${e}`}</p>;
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
