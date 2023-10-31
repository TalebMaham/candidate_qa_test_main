/// <reference types="Cypress" />


const apiRoute = 'http://localhost:3000/todos';

describe('Tests Cypress pour l\'API Todo', () => {
  let firstTodoId; // Variable globale pour stocker l'ID de la première tâche
  let secondTodoId; // Variable globale pour stocker l'ID de la deuxième tâche

  beforeEach(() => {
   
  });

  it('Devrait récupérer zéro Todos (base de données vide)', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(0); // La base de données est vide
      });
  });

  it('Devrait créer deux Todos', () => {
    // Crée la première tâche
    cy.request('POST', apiRoute, { title: 'Première tâche' })
      .should((response) => {
        expect(response.status).to.equal(201);
        firstTodoId = response.body._id; // Stocke l'ID de la première tâche
      });

    // Crée la deuxième tâche
    cy.request('POST', apiRoute, { title: 'Deuxième tâche' })
      .should((response) => {
        expect(response.status).to.equal(201);
        secondTodoId = response.body._id; // Stocke l'ID de la deuxième tâche
      });
  });

  it('Devrait récupérer deux Todos après création', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(2); // Il devrait y avoir deux tâches après la création

        // Vérifie l'ordre par date (du plus ancien au plus récent)
        const sortedTodos = response.body.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        expect(sortedTodos[0].title).to.equal('Première tâche');
        expect(sortedTodos[1].title).to.equal('Deuxième tâche');
        expect(sortedTodos[0].completed).to.be.false;
        expect(sortedTodos[1].completed).to.be.false;
      });
  });

  it('Devrait mettre à jour la première tâche', () => {
    const updatedTodo = {
      title: 'Tâche mise à jour',
      completed: true,
    };

    cy.request('PUT', `${apiRoute}/${firstTodoId}`, updatedTodo)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.include(updatedTodo);
      });
  });

  it('Devrait récupérer deux Todos après mise à jour', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(2); // Le nombre de tâches reste inchangé après la mise à jour

        // Vérifie l'ordre par date (du plus ancien au plus récent)
        const sortedTodos = response.body.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        expect(sortedTodos[0].title).to.equal('Tâche mise à jour');
        expect(sortedTodos[1].title).to.equal('Deuxième tâche');
        expect(sortedTodos[0].completed).to.be.true;
        expect(sortedTodos[1].completed).to.be.false;
      });
  });

  it('Devrait supprimer la deuxième tâche', () => {
    cy.request('DELETE', `${apiRoute}/${secondTodoId}`)
      .should((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('Devrait récupérer une tâche après suppression', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(1); // Il devrait rester une seule tâche après la suppression

        // Vérifie que la tâche restante est celle qui a été mise à jour
        expect(response.body[0].title).to.equal('Tâche mise à jour');
        expect(response.body[0].completed).to.be.true;
      });
  });

  it('Devrait supprimer la tâche mise à jour', () => {
    cy.request('DELETE', `${apiRoute}/${firstTodoId}`)
      .should((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('Devrait récupérer zéro Todos après suppression', () => {
    cy.request('GET', apiRoute)
      .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(0); // La base de données est vide après la suppression
      });
  });


  it('Devrait générer une erreur 404 lors de la mise à jour sur une base de données vide', () => {
    // Assurez-vous que la base de données est vide 

    // Tentative de mise à jour d'une ressource inexistante
    const nonexistentId = 'nonexistent_id';
    const updatedTodo = {
      title: 'Tâche mise à jour',
      completed: true,
    };

    cy.request({
      method: 'PUT',
      url: `${apiRoute}/${nonexistentId}`,
      body: updatedTodo,
      failOnStatusCode: false, // Permet de gérer l'erreur sans échec total du test
    })
      .should((response) => {
        expect(response.status).to.equal(404); // On s'attend à une erreur 404 car la ressource n'existe pas mais on trouve 500 ce qui prouve que l'app ne gere pas cette exception 
      });
  });

  it('Devrait générer une erreur 404 lors de la suppression d\'une tâche inexistante dans une base de données vide', () => {
    // Assurez-vous que la base de données est vide 

    // Tentative de suppression d'une ressource inexistante
    const nonexistentId = 'nonexistent_id';

    cy.request({
      method: 'DELETE',
      url: `${apiRoute}/${nonexistentId}`,
      failOnStatusCode: false, // Permet de gérer l'erreur sans échec total du test
    })
      .should((response) => {
        expect(response.status).to.equal(404); // On s'attend à une erreur 404 car la ressource n'existe pas mais on trouve 500 ce qui prouve que l'app ne gere pas cette exception 
      });
  });
});
