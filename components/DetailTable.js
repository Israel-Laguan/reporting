import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

const DetailTable = ({ items = [] }) => {
  let data = items.map((item, index) => (
    <tr key={item.typeItemId}>
      <th scope="row">{index + 1}</th>
      <td>{item.quantity}</td>
      <td>{item.nameItem}</td>
      <td>{item.priceUnit}</td>
      <td>{item.total}</td>
    </tr>
  ));

  return (
    <Table dark>
      <thead>
        <tr>
          <th>N°</th>
          <th>Cantidad</th>
          <th>Descripcion</th>
          <th>P.U.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>
  );
};

DetailTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      typeItemId: PropTypes.number,
      quantity: PropTypes.number.isRequired,
      nameItem: PropTypes.string.isRequired,
      priceUnit: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      status: PropTypes.string,
      lastUpdate: PropTypes.string
    })
  ).isRequired
};

DetailTable.defaultProps = {
  items: [
    {
      typeItemId: 1,
      quantity: 5,
      nameItem: "Arroz",
      priceUnit: 3,
      total: 15,
      status: "done",
      lastUpdate: "16/03/2020"
    },
    {
      typeItemId: 2,
      quantity: 5,
      nameItem: "Azucar",
      priceUnit: 3,
      total: 15,
      status: "done",
      lastUpdate: "16/03/2020"
    },
    {
      typeItemId: 3,
      quantity: 3,
      nameItem: "Atunes",
      priceUnit: 8,
      total: 24,
      status: "done",
      lastUpdate: "16/03/2020"
    }
  ]
};

export default DetailTable;
