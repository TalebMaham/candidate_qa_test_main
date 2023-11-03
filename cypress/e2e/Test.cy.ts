/// <reference types="Cypress" />

const apiRoute = 'http://localhost:3000/todos';

describe('Cypress Tests for Todo API', () => {
  let firstTodoId; // Global variable to store the ID of the first task
  let secondTodoId; // Global variable to store the ID of the second task

  beforeEach(() => {
    // No initialization needed for tests in this case
  });

  it('Should Retrieve Zero Todos (empty database)', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(0); // The database is empty
      });
  });

  it('Should Create Two Todos', () => {
    // Create the first task
    cy.request('POST', apiRoute, { title: 'First task' })
      .should((response) => {
        expect(response.status).to.equal(201);
        firstTodoId = response.body._id; // Store the ID of the first task
      });

    // Create the second task
    cy.request('POST', apiRoute, { title: 'Second task' })
      .should((response) => {
        expect(response.status).to.equal(201);
        secondTodoId = response.body._id; // Store the ID of the second task
      });
  });

  it('Should Retrieve Two Todos After Creation', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(2); // There should be two tasks after creation

        // Check the order by date (oldest to newest)
        const sortedTodos = response.body.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        expect(sortedTodos[0].title).to.equal('First task');
        expect(sortedTodos[1].title).to.equal('Second task');
        expect(sortedTodos[0].completed).to.be.false;
        expect(sortedTodos[1].completed).to.be.false;
      });
  });

  it('Should Update the First Task', () => {
    const updatedTodo = {
      title: 'Updated task',
      completed: true,
    };

    cy.request('PUT', `${apiRoute}/${firstTodoId}`, updatedTodo)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.include(updatedTodo);
      });
  });

  it('Should Retrieve Two Todos After Update', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(2); // The number of tasks remains unchanged after update

        // Check the order by date (oldest to newest)
        const sortedTodos = response.body.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        expect(sortedTodos[0].title).to.equal('Updated task');
        expect(sortedTodos[1].title).to.equal('Second task');
        expect(sortedTodos[0].completed).to.be.true;
        expect(sortedTodos[1].completed).to.be.false;
      });
  });

  it('Should Delete the Second Task', () => {
    cy.request('DELETE', `${apiRoute}/${secondTodoId}`)
      .should((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('Should Retrieve One Task After Deletion', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(1); // There should be one task remaining after deletion

        // Check that the remaining task is the one that was updated
        expect(response.body[0].title).to.equal('Updated task');
        expect(response.body[0].completed).to.be.true;
      });
  });

  it('Should Delete the Updated Task', () => {
    cy.request('DELETE', `${apiRoute}/${firstTodoId}`)
      .should((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('Should Retrieve Zero Todos After Deletion', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(0); // The database is empty after deletion
      });
  });

  it('Should Generate a 404 Error When Updating on an Empty Database', () => {
    // Make sure the database is empty 

    // Attempt to update a non-existent resource
    const nonexistentId = 'nonexistent_id';
    const updatedTodo = {
      title: 'Updated task',
      completed: true,
    };

    cy.request({
      method: 'PUT',
      url: `${apiRoute}/${nonexistentId}`,
      body: updatedTodo,
      failOnStatusCode: false, // Allows handling the error without failing the entire test
    })
      .should((response) => {
        expect(response.status).to.equal(404); // We expect a 404 error because the resource doesn't exist 
      });
  });

  it('Should Generate a 404 Error When Deleting a Non-Existent Task in an Empty Database', () => {
    // Make sure the database is empty 

    // Attempt to delete a non-existent resource
    const nonexistentId = 'nonexistent_id';

    cy.request({
      method: 'DELETE',
      url: `${apiRoute}/${nonexistentId}`,
      failOnStatusCode: false, // Allows handling the error without failing the entire test
    })
      .should((response) => {
        expect(response.status).to.equal(404); // We expect a 404 error because the resource doesn't exist 
      });
  });
});
