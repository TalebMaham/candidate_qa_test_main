# Cypress Test Report for Todo API

## Precondition: The database is initially empty.

## Test 1: Should Retrieve Zero Todos (Empty Database) <span style="color:green">(Passed)</span>

### Expected:
- A retrieval request to /todos should return a status code 200.
- The response should be an empty array.

### Result:
- The retrieval request to /todos returned a status code 200.
- The response was an empty array.

## Test 2: Should Create Two Todos <span style="color:green">(Passed)</span>

### Expected:
- Creating the first task should return a status code 201.
- The ID of the first task should be successfully stored.
- Creating the second task should return a status code 201.
- The ID of the second task should be successfully stored.

### Result:
- Creating the first task returned a status code 201.
- The ID of the first task was successfully stored.
- Creating the second task returned a status code 201.
- The ID of the second task was successfully stored.

## Test 3: Should Retrieve Two Todos After Creation <span style="color:green">(Passed)</span>

### Expected:
- A retrieval request to /todos should return a status code 200.
- The response should be an array containing two tasks.
- Tasks should be sorted by creation date.
- The first task should have the title "First task" and should not be completed.
- The second task should have the title "Second task" and should not be completed.

### Result:
- The retrieval request to /todos returned a status code 200.
- The response was an array containing two tasks.
- Tasks were sorted by creation date.
- The first task had the title "First task" and was not completed.
- The second task had the title "Second task" and was not completed.

## Test 4: Should Update the First Task <span style="color:green">(Passed)</span>

### Expected:
- Updating the first task should return a status code 200.
- The updated task should match the expected data.

### Result:
- Updating the first task returned a status code 200.
- The updated task matched the expected data.

## Test 5: Should Retrieve Two Todos After Update <span style="color:green">(Passed)</span>

### Expected:
- A retrieval request to /todos should return a status code 200.
- The response should be an array containing two tasks (unchanged count).
- Tasks should be sorted by creation date.
- The first task should have been successfully updated and marked as completed.
- The second task should remain unchanged and not be completed.

### Result:
- The retrieval request to /todos returned a status code 200.
- The response was an array containing two tasks (unchanged count).
- Tasks were sorted by creation date.
- The first task was successfully updated and marked as completed.
- The second task remained unchanged and was not completed.

## Test 6: Should Delete the Second Task <span style="color:green">(Passed)</span>

### Expected:
- Deleting the second task should return a status code 200.

### Result:
- Deleting the second task returned a status code 200.

## Test 7: Should Retrieve One Task After Deletion <span style="color:green">(Passed)</span>

### Expected:
- A retrieval request to /todos should return a status code 200.
- The response should be an array containing a single task (one task was deleted).
- The remaining task should be the one that was updated and marked as completed.

### Result:
- The retrieval request to /todos returned a status code 200.
- The response was an array containing a single task (one task was deleted).
- The remaining task was the one that was updated and marked as completed.

## Test 8: Should Delete the Updated Task <span style="color:green">(Passed)</span>

### Expected:
- Deleting the updated task should return a status code 200.

### Result:
- Deleting the updated task returned a status code 200.

## Test 9: Should Retrieve Zero Todos After Deletion <span style="color:green">(Passed)</span>

### Expected:
- A retrieval request to /todos should return a status code 200.
- The response should be an empty array (the database is empty after deletion).

### Result:
- The retrieval request to /todos returned a status code 200.
- The response was an empty array (the database was empty after deletion).

## Test 10: Should Generate a 404 Error When Updating on an Empty Database <span style="color:red">(Failed)</span>

### Expected:
- Attempting to update a non-existent resource should return a status code 404 (Resource not found).

### Result:
- Attempting to update a non-existent resource returned a status code 500 (Server error).
- **Recommendation**: It is recommended to handle exceptions in the controller to return a status code 404 when trying to update a non-existent resource in an empty database.

## Test 11: Should Generate a 404 Error When Deleting a Non-Existent Task in an Empty Database <span style="color:red">(Failed)</span>

### Expected:
- Attempting to delete a non-existent resource should return a status code 404 (Resource not found).

### Result:
- Attempting to delete a non-existent resource returned a status code 500 (Server error).
- **Recommendation**: It is recommended to handle exceptions in the controller to return a status code 404 when trying to delete a non-existent resource in an empty database.
