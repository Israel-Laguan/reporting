import React from "react";
import { Table, Input } from "reactstrap";
import PropTypes from "prop-types";

const DetailTable = ({ items, tax, total }) => {
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
            <Input type="textarea" name="items" id="items" value={items} />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Tax</td>
          <td>
            <Input type="text" name="tax" id="tax" value={tax} />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>
            <Input type="text" name="total" id="total" value={total} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DetailTable;
