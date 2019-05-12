import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { makeGetSelectedStudent } from "../ducks/StudentList";
import { createStructuredSelector } from "reselect";

class StudentForm extends Component {
  render() {
    if (this.props.student) {
      return (
        <div className="pt-1">
          <form>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.props.student.firstName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.props.student.lastName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Age
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.props.student.age}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  value={this.props.student.email}
                />
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="alert alert-danger mt-2" role="alert">
          Please select a student.
        </div>
      );
    }
  }
}

const mapStateToProps = createStructuredSelector({
  student: (state, props) =>
    makeGetSelectedStudent(parseInt(props.match.params.id))(state, props)
});

export default withRouter(connect(mapStateToProps)(StudentForm));
