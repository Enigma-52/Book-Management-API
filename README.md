# Book Management API

This repository contains a simple REST API for managing books, built with NestJS, Prisma, and SQLite.

## Setup

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Enigma-52/Book-Management-API
   cd book-management-api
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Install Prisma:**
   If you haven't installed Prisma globally, you can install it as a dev dependency for this project by running:
   ```bash
   npm install prisma --save-dev
   ```

4. **Run Migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

6. **Start the Server:**
   ```bash
   npm run start:dev
   ```

7. **Access Swagger Documentation:**
   Open your browser and navigate to `http://localhost:3000/api` to view the Swagger documentation for the API.

8. **Main API URL:**
   The API can be accessed at `http://localhost:3000`

## Tech Stack Used

- **NestJS:** Main framework for the application.
- **Prisma:** ORM for interacting with the SQL database.
- **SQLite:** SQL database used for simplicity.

### API Documentation

#### Endpoints

- **Create a New Book:** `POST /books`
  - Creates a new book with the provided details.
  - Requires a JSON body with `title`, `summary`, and `publishedDate` fields.

- **Retrieve a List of Books:** `GET /books`
  - Retrieves a list of all books stored in the database.

- **Retrieve Details of a Specific Book:** `GET /books/:id`
  - Retrieves details of a specific book identified by its ID.

- **Update Details of a Specific Book:** `PUT /books/:id`
  - Updates details of a specific book identified by its ID.
  - Requires a JSON body with fields to be updated (`title`, `summary`, `publishedDate`).

- **Delete a Specific Book:** `DELETE /books/:id`
  - Deletes a specific book identified by its ID.

#### Accessing Swagger Documentation

The Swagger documentation for this API is automatically generated and can be accessed by following these steps:

1. Ensure the server is running locally. If not, start the server using the command:
   ```bash
   npm run start:dev
   ```

2. Open your web browser and navigate to the following URL:
   ```
   http://localhost:3000/api
   ```

This will open the Swagger UI, where you can explore and interact with the API endpoints visually.

## Code

All code related to the API can be found in the `src/book-module` directory.
