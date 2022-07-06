'use strict';
const allEmployee=[];
function Employee(EmployeeID , FullName,Department,Level,Salary) { 
 this.ID=EmployeeID;
 this.name=FullName;
 this.Department=Department;
 this.Level=Level;
 this.Salary=Salary;
 allEmployee.push(this);

}  

Employee.prototype.Salary= function(min,max){ 
    console.log (Math.random() * (max - min  ) ) ;
}

const Employee1=new Employee(1000,"Ghazi Samer","Administration","Senior",1500);
const Employee2=new Employee(1001,"Lana Ali","Finance","Senior",1500);
const Employee3=new Employee(1002,"Tamara Ayoub","AMarketing ","Senior",1500);
const Employee4=new Employee(1003,"Safi Walid","Administration","Mid-Senior",1000);
const Employee5=new Employee(1004,"Omar Zaid","Development","Senior",1500);
const Employee6=new Employee(1005,"Rana Saleh","Development","jenior",500);
const Employee7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior",1000);) 

console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);
console.log(Employee5);
console.log(Employee6);
console.log(Employee7);




