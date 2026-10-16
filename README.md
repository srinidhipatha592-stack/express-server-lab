
# Lab 1: Node.js and Express Server

## Student Details
- Name: Srinidhi
- Registration Number: 252U1R9121
- Section: CSE GEN-AI (111, 2B)

## Objective
To create an HTTP server using Node.js and Express.js.

## Installation and Execution
1. Install Node.js.
2. Open the project folder in VS Code.
3. Run `npm install`.
4. Run `node server.js`.
5. Open `http://localhost:3000/` in your browser.

## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | / | Welcome message |
| GET | /about | Student details in JSON |
| GET | /date | Today's date |
| GET | /time | Current date and time |
| GET | /page | Returns an HTML page |
| GET | /unknown | Tests the 404 response |

## Screenshots

### Home Route
![Home Route](screenshots/home.png)

### About Route
![About Route](screenshots/about.png)

### Date
![Date](screenshots/date.png)

### Time
![Time](screenshots/time.png)

### HTML Page
![HTML Page](screenshots/page.png)

### 404 Response
![404 Response](screenshots/404.png)

## Notes
The Express server runs on port 3000.
Unknown routes return HTTP status code 404.

## Live Link
Not deployed yet.
