import GenericAPI from "./generic";

class StudentAPI extends GenericAPI {
  constructor(arg?: any) {
    super(arg);
    this.url = "Student API";
  }
  getExam = (studentID: string) => {
    console.log(`Get Exam by studentId: ${studentID}`);
  };
  create = () => {
    console.log(`re-assign create`);
  };
}

export default StudentAPI;
