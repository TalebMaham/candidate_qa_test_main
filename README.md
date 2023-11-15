# Qa-Test

![Test Image](image_test.png)

## Introduction

In the context of this project, I was tasked with conducting tests and ensuring the quality of this application.

## ISTQB Testing Principles

During our testing, we adhere to the fundamental principles of software testing in accordance with the guidelines of ISTQB (International Software Testing Qualifications Board):

1. **Completeness is not possible**: It is important to note that testing every aspect of the application is impossible. Given limited resources and time, it is essential to focus on the most relevant tests based on our priorities.

2. **Focus on critical points**: In our case, tests should concentrate on the application's endpoints and highlight the most critical weaknesses in the application.

## Test Cases Executed:

For this purpose, I have developed 11 test cases, which are divided as follows:

1. The first 9 cases represent nominal scenarios that do not generate errors. These reflect most use cases when users interact with the application.

2. The last 2 cases represent critical situations that the application does not handle properly and generate undesirable errors for the end client.

I have provided a report ([REPORT.md](REPORT.md)) of the tests conducted, which adheres to two constraints:

1. Technical enough for developers to quickly pinpoint the source of the problem. I have included response codes such as 200, 201, 404, 500, etc.

2. Simple enough for non-technical individuals to understand. I have used terms like retrieval, creation, update, and deletion instead of GET, POST, PUT, and DELETE. I have also indicated whether the test passed or failed so that developers can easily identify the affected method.

For the last two tests, I have provided recommendations for resolving the identified issues.

## Possible Application Improvements:

1. When creating tasks (todos), IDs are automatically generated, which means we do not know these IDs in advance. This limits our ability to perform certain actions that assume prior knowledge of the IDs. Therefore, providing an option to specify the ID along with the title during creation could be beneficial.

2. As demonstrated by the subsequent tests, exceptions are not handled effectively. In our case, numerous exceptional cases can occur, including all exceptions that the database may generate, as well as exceptions related to synchronization.

3. Adding a user interface with links, buttons, forms, lists, cards, etc., can provide a different perspective of the application and open the door to tests that highlight the importance of Cypress.

4. Adding an authentication feature can also be valuable, especially if task titles may contain private information such as phone numbers, email addresses, salaries, or company strategic plans, etc.


Thank you.
