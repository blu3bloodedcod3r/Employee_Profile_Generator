const generateHTML = answers => { 
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <title>Employee Data</title>
</head>
<body>
   <div class="container">
        <div class="row">
            ${cardGenerater(answers)}
        </div>
   </div>
</body>
</html>`}

module.exports = generateHTML

function cardGenerater (empArr) {
    console.log(empArr)
    for(let i=0; i < empArr.length; i++) {
        const currentEmp = empArr[i]
        if(currentEmp.getRole() === 'Manager'){
            console.log('Manager')
            const managerCard = `
            <div class="card p-5 mb-3 bg-danger text-white" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${currentEmp.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${currentEmp.officeNumber}${currentEmp.role}</h6>
            <ul class="card-text">
                <li>Name: ${currentEmp.name}</li>
                <li>ID: ${currentEmp.id}</li>
                <li>E-mail: ${currentEmp.email}</li>
            </ul>
            </div>
            </div>
            `
        } else if (currentEmp.getRole() === 'Engineer') {
            console.log('Engineer')
        } else if (currentEmp.getRole() === 'Intern') {
            console.log('Intern')
        } else {
            console.log('Error')
        }
    }
}
{/* <div class="card p-5 mb-3 bg-danger text-white" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${officeNumber}${github}${school}${role}</h6>
      <ul class="card-text">
        <li>Name: ${name}</li>
        <li>ID: ${id}</li>
        <li>E-mail: ${email}</li>
      </ul>
    </div>
    </div>
     */}

     ${github}${school}