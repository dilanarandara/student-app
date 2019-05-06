import React, { Component } from "react";
import { connect } from "react-redux";
import StudentForm from "../components/StudentForm";
import { Link } from "react-router-dom";

import { setStudent } from "../actions/Students";

class StudentList extends Component {
  setStudent = student => {
    this.props.setStudent(student);
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="row"
          style={{ backgroundColor: "#e9ecef", fontSize: "0.85em" }}
        >
          <div className="col-sm-3">
            <div className="text-right pr-2 pt-1 pb-1">
              <i className="far fa-plus-square" />
              &nbsp; New
            </div>
          </div>
          <div className="col-sm-9">
            <div className="text-left pl-2 pt-1 pb-1">
              <i className="far fa-edit" />
              &nbsp; Edit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="far fa-trash-alt" />
              &nbsp;Delete
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="list-group list-group-flush">
              {this.props.students.map(student => {
                return (
                  <Link
                    key={student.id}
                    className="list-group-item list-group-item-action"
                    to={`/students/${student.id}`}
                  >
                    {student.firstName} {student.lastName}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-sm-9">
            <StudentForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  students: state.students.studentList
});

const mapDispatchToProps = dispatch => ({
  setStudent: student => dispatch(setStudent(student))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
