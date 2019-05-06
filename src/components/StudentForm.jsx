import React from "react";
import { connect } from "react-redux";

const StudentForm = props => (
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
            value={props.student.firstName}
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
            value={props.student.lastName}
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
            value={props.student.age}
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
            value={props.student.email}
          />
        </div>
      </div>
    </form>
  </div>
);

const mapStateToProps = state => ({ student: state.students.selectedStudent });

export default connect(mapStateToProps)(StudentForm);
