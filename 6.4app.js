//Employee Array

var employeeArray =[
  employee1={name:"Vinod",
              age:"25",
			  salary:"50000",
			  city:"bangalore",
			  state:"KA",
			  pin:"560076"
	},
	employee2={name:"Kumar",
              age:"24",
			  salary:"5000",
			  city:"Hyderabad",
			  state:"AP",
			  pin:"500082"
	},
	employee3={name:"Kohli",
              age:"24",
			  salary:"60000",
			  city:"Bangalore",
			  state:"KA",
			  pin:"500082"
	},
	employee4={name:"Dhoni",
              age:"24",
			  salary:"5000",
			  city:"Pune",
			  state:"Maharashtra",
			  pin:"500083"
	},
	employee5={name:"John",
              age:"24",
			  salary:"5000",
			  city:"Delhi",
			  state:"Delhi",
			  pin:"502082"
	}
]
//To print all employee details in console 	
for(var x=0; x<employeeArray.length;x++){
	console.log("EMPLOYEE"+x); // heading that tells which employee details are printed
	console.log(employeeArray[x].name);
	console.log(employeeArray[x].age);
	console.log(employeeArray[x].salary);
	console.log(employeeArray[x].city);
	console.log(employeeArray[x].state);
	console.log(employeeArray[x].pin);
}
//Am curious to know if this can be done in better way