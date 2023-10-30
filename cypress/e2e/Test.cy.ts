/// <reference types="Cypress" />
import TodoController from '../../dist/controllers/todos.controller';

const apiRoute = 'http://localhost:3000/todos';

describe('Tests Cypress pour l\'API Todo', () => {
  const todoController = new TodoController();

  beforeEach(() => {
  });

  it('Devrait récupérer tous les Todos', () => {
    // Chargez la fixture 'todos.json' pour simuler des données
 
      // Effectuez une requête GET vers l'API
      cy.request('GET', apiRoute)
        .should((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array');
          //expect(response.body).to.have.length(todos.length); // Vérifiez que le nombre d'éléments correspond à la fixture
       
        });
  });

  it('Devrait créer un nouveau Todo', () => {
    const newTodo = {
      title: 'Nouveau Todo',
    };

    cy.request('POST', apiRoute, newTodo)
      .should((response) => {
        expect(response.status).to.equal(201);
        expect(response.body).to.include(newTodo);
      });
  });

  it('Devrait mettre à jour un Todo existant', () => {
    const newTodo = {
      title: 'Todo à mettre à jour',
    };

    todoController.createTodo(newTodo).then((createdTodo) => {
      const updatedTodo = {
        title: 'Todo mis à jour',
        completed: true,
      };

      cy.request('PUT', `${apiRoute}/${createdTodo._id}`, updatedTodo)
        .should((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.include(updatedTodo);
        });
    });
  });

  it('Devrait supprimer un Todo existant', () => {
    const newTodo = {
      title: 'Todo à supprimer',
    };

    todoController.createTodo(newTodo).then((createdTodo) => {
      cy.request('DELETE', `${apiRoute}/${createdTodo._id}`)
        .should((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('message', 'Todo supprimé avec succès');
        });
    });
  });
});
