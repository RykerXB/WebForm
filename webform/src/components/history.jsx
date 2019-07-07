import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

const Custdata = props => (
  <tr>
    <td>{props.custdata.customer_name}</td>
    <td>{props.custdata.customer_mobile}</td>
    <td>{props.custdata.amount}</td>
    <td>{props.custdata.purchased_online}</td>
  </tr>
);

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = { custdata: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/custdata/")
      .then(response => {
        this.setState({ custdata: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  custdataList() {
    return this.state.custdata.map(function(currentCustdata, i) {
      return <Custdata custdata={currentCustdata} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>History</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Mobile</th>
              <th>Amount (in ₹)</th>
              <th>Online Payment</th>
            </tr>
          </thead>
          <tbody>{this.custdataList()}</tbody>
        </table>
      </div>
    );
  }
}
