class Person {
    #age;
    static count = 0;
    constructor (name,age){
        
        this.name = name;
        this.#age = age;
        Person.count++;
    }
    get age(){
        return this.#age
    }
   
    set age(value){
        
        if (value >= 0 && value <= 120){
            return this.#age = value
        }
        else {
            controle.log("Geçerli bir yaş giriniz!");
        }
    }
    introduce() {
        console.log(`Merhaba, ben ${this.name}. ${this.#age} yaşındayım.`)
    }
}
class Student extends Person {
    #studentNo;
    static count = 0;
    constructor (name, age, studentNo){
        super(name, age);
        this.#studentNo = studentNo
        Student.count++;
    }
    introduce(){
    console.log(`Merhaba, ben ${this.name}. ${this.age} yaşındayım. Öğrenci Numaram: ${this.#studentNo}.`)
    }

}
class Instructor extends Person {
    #branch;
    static count = 0;
    constructor (name, age, branch){
        super(name, age);
        this.#branch = branch
        Instructor.count++;
    }
    introduce(){
        console.log(`Merhaba, ben ${this.name}. ${this.age} yaşındayım. Branşım: ${this.#branch}.`)

    }
}



const p1 = new Person("Bahadır", 21);
const s1 = new Student("Arda", 20, "2025001");
const s2 = new Student("Esma", 19, "2025002");
const i1 = new Instructor("Arca", 20, "Fullstack Development");

console.log(Person.count);
// 4

console.log(Student.count);
// 2

console.log(Instructor.count);
// 1