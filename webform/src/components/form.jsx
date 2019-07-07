import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerMobile = this.onChangeCustomerMobile.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      customer_name: "",
      customer_mobile: "",
      amount: "",
      purchased_online: false
    };
  }

  onChangeCustomerName(e) {
    this.setState({
      customer_name: e.target.value
    });
  }

  onChangeCustomerMobile(e) {
    this.setState({
      customer_mobile: e.target.value
    });
  }

  onChangeAmount(e) {
    this.setState({
      amount: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Customer Name: ${this.state.customer_name}`);
    console.log(`Mobile: ${this.state.customer_mobile}`);
    console.log(`Amount: ${this.state.amount}`);
    console.log(`Purchased online: ${this.state.purchased_online}`);

    const newCustdata = {
      customer_name: this.state.customer_name,
      customer_mobile: this.state.customer_mobile,
      amount: this.state.amount,
      purchased_online: this.state.purchased_online
    };

    axios
      .post("http://localhost:4000/custdata/add", newCustdata)
      .then(res => console.log(res.data));

    this.setState({
      customer_name: "",
      customer_mobile: "",
      amount: "",
      purchased_online: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Order</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Customer Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.customer_name}
              onChange={this.onChangeCustomerName}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number </label>
            <input
              type="text"
              className="form-control"
              value={this.state.customer_mobile}
              onChange={this.onChangeCustomerMobile}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeAmount}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
