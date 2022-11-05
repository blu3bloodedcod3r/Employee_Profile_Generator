function cardGenerater(empArr) {

    // manager
    function generateManager(manager) {
        return `
                <div class="card p-5 mb-3 bg-danger text-white" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
                <ul class="card-text">
                    <li>ID: ${manager.getId()}</li>
                    <li>E-mail: ${manager.getEmail()}</li>
                    <li>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
                </div>
                </div>          
        `
    }
    function generateEngineer(engineer) {
        return  `
                    <div class="card p-5 mb-3 bg-danger text-white" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${engineer.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
                     <ul class="card-text">
                         <li>ID: ${engineer.getId()}</li>
                         <li>E-mail: ${engineer.getEmail()}</li>
                         <li>GitHub: ${engineer.getGithub()}</li>
                        </ul>
                        </div>
                     </div>
                    `
    }
    function generateIntern(intern) {
        return `
                    <div class="card p-5 mb-3 bg-danger text-white" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
                 <ul class="card-text">
                     <li>ID: ${intern.getId()}</li>
                     <li>E-mail: ${intern.getEmail()}</li>
                     <li>School Name: ${intern.getSchool()}</li>
                 </ul>
                 </div>
                 </div>
                    `
    }

    const starterHtml = []

    starterHtml.push(empArr
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    )
    starterHtml.push(empArr
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    )
    starterHtml.push(empArr
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    )
    return starterHtml.join("")
;}

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