let employeeArray1 = [];
for(let i = 0 ;i< employeeArray.length;i++){
    employeeArray1[i] = {};
    let myKeys = Object.keys(employeeArray[i]);
    for(let j=0;j<myKeys.length;j++){
        let newKey = myKeys[j].toLowerCase();
        if(i === 0){
            console.log(newKey);
        }
        employeeArray1[i][newKey] = employeeArray[i][myKeys[j]];
    }
}