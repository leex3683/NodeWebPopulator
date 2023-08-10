const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Tell me a little bit about yourself.',
            name: 'bio',
        },
    ])
    .then((response) =>
        fs.writeFile('index.html',
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="styles.css">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
            </head>
            <body>
                

            <div class="card border-primary m-3" style="max-width: 18rem;">
            <div class="card-header">Your information</div>
            <div class="card-body text-primary">
              <h5 class="card-title">Here's some info about you</h5>
                       
              <p class="card-text">  Your name is: ${response.name}</p>
              <p class="card-text"> You live in: ${response.location}</p>
              <p class="card-text"> Your Bio: ${response.bio}</p>
              
            </div>




                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
                </body>
            </html>`, (err) =>

            err ? console.error(err) : console.log('Commit logged!')
        )
    );
