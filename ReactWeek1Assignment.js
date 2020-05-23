class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
   
}


class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if (this.students.filter(stdt => stdt.email === student.email).length) {
            console.log(`This name is in the list please put the new name`)
        } 
        else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`)
        }
        return this.students;
    }
}


// ******************************
// 1. Make Student and Bootcamp Classess
// 2. Add new students by Student class
//     // USE OF STUDENT CLASS for an OBJECT:
    const Neo = new Student("Neo", "neoilmatrix.org", "Seattle"); 
    const Morpheus = new Student("Morpheus", "morpheus@matrix.org", "Tacoma");
    const Trinity = new Student("Trinity", "trinity@matrix.org", "Bellingham");
// 3. Build 2 kind of registration
//     // USE OF BOOTCAMP CLASS:
    const webDevFundamentals = new Bootcamp("Web Development Fundamentals", "Beginner"); 
    const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced"); 
// 4. Make register the new students that maked by student class
//     // REGISTER STUDENT IN WEBDEVFUNDAMENTALS:
    webDevFundamentals.registerStudent(Neo);
    webDevFundamentals.registerStudent(Morpheus);
    webDevFundamentals.registerStudent(Trinity);
// ******************************






