import GenericAPI from "./generic";

class TeacherAPI extends GenericAPI {
  constructor(arg?: any) {
    super(arg);
    this.url = "Teacher API";
  }
  postExam = (data: any) => {
    console.log(`Post Exam: ${JSON.stringify(data)}`);
  };
}

export default TeacherAPI;
