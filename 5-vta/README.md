# VTA

This application allows assessors to check and record all aspects of a vehicle safety digitally.
The code repository can be found on github - [cvs-app-mobile](https://github.com/dvsa/cvs-app-mobile/).
The vast majority of the documentation below will require an access, if not already provided please ask your team lead or DevOps team.

A VTA page can be found [here](https://wiki.dvsacloud.uk/pages/viewpage.action?spaceKey=HVT&title=VTA), please read this document as it will present the product, project onboarding, HLDs and its testing.

## Getting started

At the time this document is being created (July 2021), the [branch 18854](https://github.com/dvsa/cvs-app-mobile/tree/feature/CVSB-18854) is the most recent version of the application (_work stream in flight refactoring the authentication mechanism with new 3rd party library_), otherwise please always refer to develop branch for the latest version of the codebase.
Please familiarise yourself with the [branching strategy](../2-tooling/README.md#branching-and-merging-strategy) if you need to understand gitflow branching.

### Technical stack

This section will present the stack used for VTA however please refer to the `README.md` file of the project to get started and have in depth details as well as its `package.json`.

The application is powered by Node.js and uses [Ionic (3)](https://ionicframework.com/docs/v3/) running with Angular framework. The language used is typescript, if you are not familiar with the technologies above, it will be recommended to go through these links first:

- Typescript:
  - [Understanding of Typescript](https://www.udemy.com/share/101sTi2@FEdgfWJgc1YPdkZDBHFxfj5HY1di/)
- Angular:
  - [The complete guide - Angular](https://www.udemy.com/share/101WAU2@PW5gblpfSlQIcEBSO0tOfRRt/)
  - [angular styleguide](https://angular.io/guide/styleguide)
- Ionic:
  - [The complete guide - Ionic](https://www.udemy.com/share/101Yxa2@FEdKblpfSlQIcEB4Eks=/)

The VTA backlog can be found on Jira under the [CVSB project](https://jira.dvsacloud.uk/secure/RapidBoard.jspa?rapidView=695&projectKey=CVSB&quickFilter=3738&quickFilter=3736).

### UX and UI

The following links will present UX design for VTA:

- App Flows:
  - [VTA Flowchart](https://wiki.dvsacloud.uk/display/HVT/VTA+Flowchart)
  - [VTA NFR Map](https://wiki.dvsacloud.uk/display/HVT/Mobile+App+Flow)
- Prototype(s):
  - [Mobile prototype](https://marvelapp.com/prototype/434h2c5/screen/53635491)
  - [Wireframes](https://wiki.dvsacloud.uk/pages/viewpage.action?pageId=33594455)
  - [VTA Design files](https://wiki.dvsacloud.uk/display/HVT/VTA+design+files) (editable source files for the prototype)
- [CVS Styleguide & GDS](https://wiki.dvsacloud.uk/pages/viewpage.action?pageId=33437373)

It is recommended to also run the application in your browser for local development, please refer to the [configuration section](#configuration) and project `README.md` file on Github.

### Low level designs

This section will present design documents relevant for VTA and their backend microservices:

- [VTA All in one diagram](https://wiki.dvsacloud.uk/pages/viewpage.action?pageId=79254695)
- Azure AD is used for authentication: [Azure AD apps](https://wiki.dvsacloud.uk/display/HVT/Azure+AD+Apps)

Please refer to the project `README.md` file for detailed information and access to individual microservices designs.

### Configuration

Please refer to the following page configure your project in order to get started - [VTA Getting Started](https://wiki.dvsacloud.uk/display/HVT/Getting+started+with+the+Mobile+App).

### Developing and testing

Since Ionic offers the ability to create hybrid apps, the web app is used locally to develop in the browser, should you wish to test end to end your changes you can refer to this [infrastructure guide for VTA](https://wiki.dvsacloud.uk/display/HVT/VTA#VTA-Infrastructure) to build the hybrid app and test the app.
All the end to end tests for VTA are under the following repo: [cvs-auto-mobile-app](https://github.com/dvsa/cvs-auto-mobile-app).<br>
Please not that for building the hybrid application locally, you will require XCode 11+ and instructions are provided in the `README.md` file of the project.
<br>
AWS Cloud platform is used and it is recommended to get a `DEVELOPER` access, please get in touch with your team lead or devOps team to do so.

## Additional links

- Angular uses a reactive programming pattern - [angular reactive course](https://www.udemy.com/share/101Zxa2@PW1gVEtKSVQLc0dEAXRnVD5HSlc=/)
- [ngrx the complete guide](https://www.udemy.com/share/1026ZI2@PW5KfWJZS1AOckBBBEtnfg==/)
- [Learn RXJS](https://www.learnrxjs.io/)
- [Testing with RXJS Marbles](https://rxmarbles.com/)
- [Testing Angular](https://www.udemy.com/share/1026k42@FEdgV2JjSVQLc0dEAXRNfRRtSg==/)
