import StudentAPI from "./API/student";
import TeacherAPI from "./API/teacher";

console.log("🚀 🚀 🚀 🚀 🚀 🚀  Student   🚀 🚀 🚀 🚀 🚀 🚀 ");
const student = new StudentAPI();
console.log("===Call API");
console.log("===Call Get List");
student.list();
console.log("===Call Get exam");
student.getExam("idS");

console.log("🚀 🚀 🚀 🚀 🚀 🚀  Teacher  🚀 🚀 🚀 🚀 🚀 🚀 🚀 ");
const teacher = new TeacherAPI();
console.log("===Call API");
console.log("===Call Get List");
teacher.list();
console.log("===Call Get exam");
teacher.postExam({
  question: "Are you ok?",
  answer: ["Yes", "No"],
});

console.log("🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 Student Re-Assign Create 🚀 🚀 🚀 🚀 🚀 🚀 🚀 ");
student.create();
