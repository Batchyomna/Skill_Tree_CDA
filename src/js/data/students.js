import { Student } from '../entities/student'

const Quentin = new Student("Quentin", "Danneville");
const Loubna = new Student("Loubna", "Quelquechose");
const John = new Student("John", "Doe");
const Grace = new Student('Grace', 'Hopper');

const students = []
students.push(Quentin, Loubna, John, Grace)

export default students