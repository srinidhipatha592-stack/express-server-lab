
# Lab 1: Node.js and Express Server

## Student Details
- **Name:** Srinidhi
- **Registration Number:** 252U1R9121
- **Section:** CSE GEN-AI (111, 2B)

## Objective
To create an HTTP server using Node.js and Express.js.

## Installation and Execution
1. Install Node.js.
2. Open the project folder in VS Code.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Express server:
   ```bash
   node server.js
   ```
5. Open `http://localhost:3000/` in your browser.

## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/about` | Student details in JSON |
| GET | `/date` | Today's date |
| GET | `/time` | Current date and time |
| GET | `/page` | Returns an HTML page |
| GET | `/unknown` | Tests the 404 response |

## Screenshots

### 1. Home Route
![Home Route](screenshots/home.png)

### 2. About Route
![About Route](screenshots/about.png)

### 3. Date Response
![Date Response](screenshots/date.png)

### 4. Time Response
![Time Response](screenshots/time.png)

### 5. HTML Page
![HTML Page](screenshots/page.png)

### 6. Custom 404 Response
![404 Response](screenshots/404.png)

## Notes
- The Express server runs on port 3000.
- The server handles HTTP GET requests.
- Unknown routes return HTTP status code 404.

## Live Link
Not deployed yet.
