
// Info for Team Manager

const addManager = function (manager) {
    return `
<div class="col-4 mt-4">
    <div class= "card h-100">
        <div class = "card-header">
            <h3> ${manager.name} </h3>
         <h4> Manager </h4> <i class="put icon here" </i>
        </div>

    <div class ="card-body">
        <p class="id"> ID: ${manager.id} </p>
        <p class="email"> Email: ${manager.email} </p>
        <p class="officenum"> Office Number: ${manager.officeNum} </p>
    </div>
    </div>
    </div>`;
};

//-------------------------------------------------------------------------
// Info for Engineer employees

const addEngineer = function (engineer) {
    return `
  <div class="col-4 mt-4">
    <div class= "card h-100">
    <div class = "card-header">
        <h3> ${engineer.name} </h3>
        <h4> Engineer </h4> <i class="put icon here" </i>
    </div>

    <div class ="card-body">
        <p class="id"> ID: ${engineer.id} </p>
        <p class="email"> Email: ${engineer.email} </p>
        <p class="username"> GitHub: ${engineer.username} </p>
    </div>
    </div>
    </div>`;  
};

//---------------------------------------------------------------------------
// Info for Interns

const addIntern = function(intern){
    return `
    <div class="col-4 mt-4">
    <div class= "card h-100">
    <div class = "card-header">
        <h3> ${intern.name} </h3>
        <h4> Manager </h4> <i class="put icon here" </i>
    </div>

    <div class ="card-body">
        <p class="id"> ID: ${intern.id} </p>
        <p class="email"> Email: ${intern.email} </p>
        <p class="school"> School/University: ${intern.school} </p>
    </div>
    </div>
</div> `;
};

//------------------------------------------------------------------------
// Function to create team array

generateHTML = (teamArray) => {
    membArr =[];

    for (let i = 0; i < teamArray.length; i++) {
        const member = teamArray[i];
        const job = member.getJob();

        if (job === "Manager"){
            const mngrInfo = generateManager(member);
            membArr.push(mngrInfo);
        }
        if (job === "Engineer"){
            const engInfo = generateEngineer(member);
            membArr.push(engInfo);
        }
        if (job === "Intern"){
            const intInfo = generateIntern(member);
            membArr.push(intInfo);
        }
    }
// push info together
    const staffInfo = teamArray.join('')
    const generateTeam = generateTeamOverview(staffInfo);
    return generateTeam;
}

// Function

const generateTeamOverview= function (staffInfo){
    return`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset ="UTF-8">
        <meta name ="viewport" content= "width=device-width, initial-scale=1.0>
        <title> Team Profile Generator </title>
        <link rel =stylesheet" href="./dist/team.css"
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    </head>

    <body>
        <header> 
            <nav class ="navbar" id="navbar">
                <span class ="navbar=brand mb-0 h1 w-100 text-center" id ="navebar-text">Team Overview </span>
            </nav>
        </header>

        <main>
            <div class = "container">
            <div class="row justify-content-center" id ="team-info">
                ${staffInfo}
            </div>
            </div>
        </main>

        <script src="./script2.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://code.iconify.design/2/2.1.1/iconify.min.js"></script>
    </body>
    </html>
    `
}

module.exports= generateHTML;