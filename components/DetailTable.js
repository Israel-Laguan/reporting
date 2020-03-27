import React from "react";
import { Table, Input } from "reactstrap";
import Link from 'next/link'
import {Button} from 'reactstrap'

const DetailTable = ({client, items, total, status }) => {
  return (
    <>
    <Table dark className="container">
      <thead>
        <tr className="mb-5">
          <th>Cliente</th>
          <th>Descripcion</th>
          <th>{status?'Total':null} </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{client} </td>
          <td>
          {items}
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          {
            console.log(status)
          }
          <td>
            {
              status ? 'Total':null
            }</td>
          <td>
          {status ? total : null}
          </td>
        </tr>
      </tbody>
    </Table>
    <Link href={`/`}>
    <Button className="ml-5 mb-5 mt-5" color="primary" size="lg">⬅️ Volver</Button>
  </Link>{' '}
  </>
  );
};

export default DetailTable;
