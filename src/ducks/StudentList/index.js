import { NAME } from "../../config/consts";
import { createSelector } from "reselect";

// Constants
const STATE_NAME = "students";
const SET_STUDENT = `${NAME}/${STATE_NAME}/SET_STUDENT`;

// Actions

// Set current student
export const setStudent = student => ({
  type: SET_STUDENT,
  student
});

// Selectors
const studentListSelector = state => state.students.studentList;

export const makeGetStudentList = () =>
  createSelector(
    [studentListSelector],
    students => students
  );

export const makeGetSelectedStudent = id =>
  createSelector(
    studentListSelector,
    students => {
      if (students.length) {
        if (id) {
          return students.find(student => student.id === id);
        }
        return students[0];
      }
      return undefined;
    }
  );

// Reducers
let studentList = [];
//#region student list
studentList = [
  {
    id: 1,
    firstName: "Dilan",
    lastName: "Arandara",
    age: 30,
    email: "dilan.arandara@gmail.com"
  },
  {
    id: 2,
    firstName: "Jennifer",
    lastName: "Aniston",
    age: 50,
    email: "jennifer.aniston@gmail.com"
  },
  {
    id: 3,
    firstName: "Shahrukh",
    lastName: "Khan",
    age: 53,
    email: "shahrukh.khan@gmail.com"
  },
  {
    id: 4,
    firstName: "Jennifer",
    lastName: "Lawrence",
    age: 28,
    email: "jennifer.lawrence@gmail.com"
  },
  {
    id: 5,
    firstName: "Brad",
    lastName: "Pitt",
    age: 55,
    email: "brad.pitt@gmail.com"
  },
  {
    id: 6,
    firstName: "Tom",
    lastName: "Cruise",
    age: 56,
    email: "tom.cruise@gmail.com"
  },
  {
    id: 7,
    firstName: "Miranda",
    lastName: "Kerr",
    age: 36,
    email: "miranda.kerr@gmail.com"
  },
  {
    id: 8,
    firstName: "Johnny",
    lastName: "Depp",
    age: 55,
    email: "johnny.depp@gmail.com"
  },
  {
    id: 9,
    firstName: "Jessica",
    lastName: "Alba",
    age: 38,
    email: "jessica.alba@gmail.com"
  },
  {
    id: 10,
    firstName: "Leonardo",
    lastName: "DiCaprio",
    age: 44,
    email: "leonardo.dicaprio@gmail.com"
  }
];

//#endregion

const initialState = {
  studentList,
  selectedStudent: studentList.length ? studentList[0] : undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return Object.assign({}, state, {
        selectedStudent: action.student
      });
    default:
      return state;
  }
};
