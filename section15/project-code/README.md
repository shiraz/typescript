# Typescript & Express TODO App
This project is a simple implementation of a TODO API using TypeScript and Express.

# To access:
1. Access the appropriate project in the section folder, and then run the command, `npm ci`.
2. In a terminal window, cd into the project folder, and execute the command, `npm start`.
3. In another terminal window, cd into the project folder, and execute the command, `npm run watch`. 
4. To create a new TODO, execute the command in the terminal, `curl --location 'http://localhost:3000/todos/' \
--header 'Content-Type: application/json' \
--data '{
    "text": "We have to do this 3"
}'`.
5. To get the current list of TODOS, execute the command in the terminal, `curl --location 'http://localhost:3000/todos/'`.
6. To get the update a specific TODO, grab the id of a specific TODO from the above response, add it to the end of the request URL in the command, `curl --location --request PATCH 'http://localhost:3000/todos/<ID_TO_BE_ADDED>' \
--header 'Content-Type: application/json' \
--data '{
    "text": "This is the updated text"
}'`.
7. To get the current list of TODOS, execute the command in the terminal, `curl --location --request DELETE 'http://localhost:3000/todos/<ID_TO_BE_ADDED>'`.