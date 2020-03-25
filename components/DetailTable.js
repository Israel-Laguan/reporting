import React from "react";
import { Table, Input } from "reactstrap";
import PropTypes from "prop-types";

const DetailTable = ({ items, total }) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>N°</th>
          <th>Descripcion</th>
          <th>P.U.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
          {items}
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>
          {total}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DetailTable;
