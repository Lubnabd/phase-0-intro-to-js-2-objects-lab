// Write your solution in this file!

const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
  
    updatedEmployee[key] = value;
  
    return updatedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
console.log();
    employee[key] = value;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = { ...employee };
  
    delete newEmployee[key];
  
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
  }