'use strict'; 
(function() {
 
  display(Math.PI);
  display(Math.max(2,34,45,100));
  display(Math.round(23.4));

  let date1 = new Date(2050,3,25,13,1,30,50);
  let date2 = new Date();
  display(date1.toString());
  display(date1-date2);

  function checkPassword(password){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  display(checkPassword('Stronger1'));

  function finaAlerts(logData){
    let regex = /ERROR(.*?):(.*?);/g;
    let result = regex.exec(logData);
    while(result != null){
      display(result);
      display(result[1]);
      display(result[2]);
      result =  regex.exec(logData);
    }
  }

  let logData = 'INFO:Ok;ERROR(HIGH):Something Broke;ERROR(LOW):Something fishy;ERROR(LOW):Something fishy;';
  let result = finaAlerts(logData);
  //display(result);

})();
//----------classes and properties-----//
// class Person{
//   constructor(firstName,lastName,age){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age
//   }

//   get fullName(){
//     return this.firstName+ ' '+this.lastName;
//   }

//   set fullName(value){
//     let nameParts = value.split(' ');
//     this.firstName = nameParts[0];
//     this.lastName = nameParts[1];
//   }

//   isAdult(){
//     return this.age >= 18;
//   }

// }

// class Student extends Person{
//   constructor(firstName,lastName,age){
//     super(firstName,lastName,age);
//     this._enrolledCourses =[];
//   }

//   static fromPerson(person){
//     return new Student(person.firstName,person.lastName,person.age);
//   }

//   enroll(courseId){
//   this._enrolledCourses.push(courseId);
//   }
  
//  getCourses(){
//   return this.fullName+ "'s enrolled courses are: "+
//   this._enrolledCourses.join(',');
//   }
// }

// Object.defineProperty(Person.prototype,'fullName',{enumerable:true});
// let jim = new Person('Jim','Cooper',19);
// let student = Student.fromPerson(jim);
// student.enroll('CS205');
// student.enroll('EA101');
// display(student.getCourses());
// display(student);
// display(jim);
//-------prototype inheritance-------//
// function Person(firstName,lastName){
//   this.firstName = firstName,
//   this.lastName = lastName
//   Object.defineProperty(this,'fullName',{
//   get: function(){
//   return this.firstName+' '+this.lastName;
//   },
//     set: function(value){
//      let nameParts = value.split(' ');
//     this.name.firstName = nameParts[0];
//      this.name.lastName = nameParts[1];
// },enumerable : true
// });
// }

// function Student(firstName,lastName,age){
// Person.call(this,firstName,lastName,age)
// this._enrolledCourses =[];

// this.enroll = function(courseId){
// this._enrolledCourses.push(courseId);
// };

// this.getCourses = function(){
// return this.fullName+ "'s enrolled courses are: "+
// this._enrolledCourses.join(',');
// };
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// let jim = new Student('Jim','Cooper',29);
// jim.enroll('CS205');
// jim.enroll('EA101');
// display(jim.getCourses());
//------prototype chain---------------//
// function Person(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.age = '29';

// let sofia = new Person('Sofia','Cooper');
// let jim = new Person('Jim','Cooper');

// Person.prototype = {age : '18'};
// let lina = new Person('lina','Cooper');
// display(lina.__proto__.__proto__.__proto__);
//-------prototype object--------------//
// function Person(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.age = '29';

// let sofia = new Person('Sofia','Cooper');
// let jim = new Person('Jim','Cooper');

// Person.prototype = {age : '18'};
// let lina = new Person('lina','Cooper');
// display(lina);
//------prototye properties--------------//
// function Person(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.age = '29';

// let sofia = new Person('Sofia','Cooper');
// let jim = new Person('Jim','Cooper');
// sofia.age = 30
// display(jim);

// display(sofia.hasOwnProperty('age'));
// display(sofia.age);
//--------prototype-------------------//
// function Person(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.age = '29';

// let jim = new Person('Jim','Cooper');
// jim.__proto__.age = '30'
// display(jim.__proto__);
// display(Person.prototype);

// display(Person.prototype===jim.__proto__)
//---------getter and setter-----------//
// let person = {
//   name :{
//         firstName : 'Jim',
//         lastName: 'Cooper'
//       },
//   age: 28,
//   isAdult () { return this.age >= 28 }
//  };

// Object.defineProperty(person,'fullName',{
//   get: function(){
//     return this.name.firstName+' '+this.name.lastName;
//   },
//   set: function(value){
//     let nameParts = value.split(' ');
//     this.name.firstName = nameParts[0];
//     this.name.lastName = nameParts[1];
//   }
// });
// person.fullName = 'Anant Majhi';
// display(person.fullName);
//----------configurable property-------//
// let person = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
// age: 28,
// isAdult () { return this.age >= 28 }
// };

// Object.defineProperty(person,'firstName',{configurable : false})
// delete person.firstName;
// Object.defineProperty(person,'firstName',{enumerable : false})

// for(let property in person){
// display(property +' '+ person[property]);

//----------Enumerable property---------//
// let person = {
//   name :{
//     firstName : 'Jim',
//     lastName: 'Cooper'
//   },
//   age: 28,
//   isAdult () { return this.age >= 28 }
//  };

//  Object.defineProperty(person,'isAdult',{enumerable : false})

// for(let property in person){
//  display(property +' '+ person[property]);
// }

// display(Object.keys(person));

// display(JSON.stringify(person));
//----------Writeable property----------//
// let person = {
//   name :{
//     firstName : 'Jim',
//     lastName: 'Cooper'
//   },
//   age: 28,
//   isAdult () { return this.age >= 28 }
//  };

// Object.defineProperty(person,'name',{writable:false})
// Object.freeze(person.name);
// person['name']['firstName'] = 'Anant';
// display(person.name);

//-------bracket notation---------------//
// let person = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   age: 28,
//   isAdult () { return this.age >= 28 }
//  };
//  person['hair color']='Brown';
//  let propertyName = 'age';
 
//display(Object.getOwnPropertyDescriptor(person,'lastName'))

//  for(let property in person){
//   display(property +' '+person[property]);
// }

//-------Object Create------------------//
// let person1 = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   age: 28,
//   isAdult () { return this.age >= 28 }
//  };

//   let person2 = Object.create(
//     Object.prototype,
//     {
//       firstName :{value : 'Jim',enumerable : true,writable: true ,configurable :true},
//       lastName :{value : 'Cooper',enumerable : true,writable: true ,configurable :true},
//       age :{value : 28,enumerable : true,writable: true ,configurable :true},
//     }
//   );

//   display(person1);
//   display(person2);

//--------Using Constructor--------------//
// function Person(fName,lName,age){
//   this.firstName = fName;
//   this.lastName = lName;
//   this.age = age;
//   this.isAdult = function () {return this.age >= 29;}
// }

// let anant = new Person('Anant','Majhi',29);
// let sofia = new Person('Sofia','Majhi',20);

// display(anant.isAdult());
// display(sofia.isAdult());
//---------Object immutable--------------//
// let person = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   isAdult () { return this.age >= 28 }
// };

// let health = {
//   height : '12cms',
//   weight : '30kgs'
// };

// let person2 = Object.assign({},person,health);
// display(person2);

//-----------Objects Equality------------------//
// let person = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   isAdult () { return this.age >= 28 }
// };

// let person1 = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   isAdult () { return this.age >= 28 }
// };

// let person = 'Anant';
// let person1 = new String('Anant');

// display(person==person1);
// display(person===person1);
// display(Object.is(person,person1));

//------------By Object Literals-----------------//
// let person = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   isAdult : function(){return this.age >= 28}
// };

// person.age = 12;
// display(person.isAdult());

//-----------------------------//
// function registerUser(firstName,lastName){
//   let person = {
//     firstName,
//     lastName
//   }
//   display(person.firstName+ ' '+ person.lastName);
// }

// registerUser('Anand','Majhi');

//-----------------------------//
// let person = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   isAdult () { return this.age >= 28 }
// };

// person.age = 30;
// display(person.isAdult());

//---------------------------//
// let person = {
//   firstName : 'Jim',
//   lastName: 'Cooper',
//   isAdult () { return this.age >= 28 }
// };

// person.age = 30;

// display(Object.keys(person));

// for(let property in person){
//   display(property);
// }