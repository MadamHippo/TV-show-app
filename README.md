![Image description](https://github.com/MadamHippo/TV-show-app/blob/main/src/assets/logo/KalAcademyTVProjectMockup.jpg)

# Live Demo

Youtube: https://youtu.be/3ihFCt-TSVM

Part 2 (more random searches etc.): https://youtu.be/siAyrHgc7Gk

# Summary

The first project for CLIENT#1A using Angular and Angular Materials. This was written in Typescript, HTML, and CSS.

We made an app called The TV Box using the Angular framework. Its main function is to fetch the user's show information based on their search query. We are getting up-to-date show information by hooking up service to TV Maze's API. 

There are 3 subcomponents under the main app component: main page, show search, and feature shows (which is what show search returns)

The service does the backend work to fetch the data from the API, map the data, filter the data by passing it through the shows-data.ts files and the app component passes it to the subcomponents to be shown. 

The main page displays all new airing shows daily. You can search by keyword in the search box. Each show's summary can be expanded, this was made by using Angular material cards. (Edit, oops I meant to say made with Angular cards AND Angular's expansion panel as well.)

The TV Box header will take you back to this main page. 

We also added flex layout using Angular's flex layout module so it's both mobile and tablet friendly :)

Basic Architecture: 

Modern applications have 2 parts at least, front and back. Front = client = what the user sees and interacts with. It is the User Interface of the application made with HTML CSS TS. The backend sits in the cloud and does the processing. Front and back-end servers (such as Data + API) talk to each other. The front-end calls back-end with HTTP request to the HTTP services / API (back-end server). So we can call them using a simple request to get the data we want. 

Foreign Ports = HTTP Endpoints
Cargo Ships = HTTP Request
Cargo = Data

The backend also has business logic.
The front end is presentation logic and HTML templates. (What users will see and experience when they click on something for example.)


# TVShowApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
