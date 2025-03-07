# CrudApp
Project Setup-
-----------------------------------------

Steps to create a new Angular project
1.Install Angular CLI globally. You can do this by running npm install -g @angular/cli in your terminal. 
2.Run ng new in the directory where you want to create your project. 
3.Provide a name for your project. 
4.Answer prompts for optional configuration. You can accept the defaults by pressing Enter. 
5.Wait for the Angular CLI to install dependencies and create the project. 

Commands to generate new component(CRED/Pages/All_users):
ng g c CRED/Pages/All_users

Setup JSON Server:
https://www.npmjs.com/package/json-server -------->For the dummy server.

1. install json-server:
   
   npm install json-server

2. Create a db.json or db.json5 file

   {
  "userList": [
    { 
     "userName": "Kings Engineering",
      "userAge": "26",
      "id": "1234"
     
    },
    { 
     "userName": "Vikash Ram",
      "userAge": "28",
      "id": "12345"
     
    },
    ]
}

3. Pass it to JSON Server CLI:
    
   npx json-server db.json

4. Get a REST API(hit below URL to get JSON in local browser)

http://localhost:3000/userList


{
  "userList": [
    { 
     "userName": "Kings Engineering",
      "userAge": "26",
      "id": "1234"
     
    },
    { 
     "userName": "Vikash Ram",
      "userAge": "28",
      "id": "12345"
     
    }
    ]
}



Service setup and click to add data in API:

To create a new service: ng generate service ServiceName
ng generate service app/services/https-services


--------------------------------------------------------------------------

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
