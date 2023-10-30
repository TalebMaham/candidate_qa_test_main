# Visions Testing & QA Test

## Installation and getting started

We use pnpm for managing packages. No compatibility issues were found in the packages we use with pnpm yet.

If you don't have pnpm installed you simply need to run
```bash
npm i -g pnpm
```

After cloning the repo, run 
```bash
pnpm i
```
to install packages.

Don't forget to set your env variables based on the .env.sample provided
```bash
cp .env.sample .env
```

## Tasks

The candidate is to achieve the following tasks

- Create some tests in order to properly test the different endpoints of the app
- Setup cypress and the test suite
- Identify elements of the app that could be enhanced and that are of insufficient quality
- Produce a detailed report / documentation on effected tests

The report should properly achieve the following goals:
- Be technically clear enough so that a developer team can quickly iterate on the enhancements
- Be clear enough for non-technical people to be shared with the non-dev team so they can understand the evolutions as well

## Deliverables

- Fork this project and follow the installation instructions
- Follow the tasks to complete the work
- Produce your test / QA report in a REPORT.md file
- Push your work to your github account and provide the github url to the person in charge of reviewing the test