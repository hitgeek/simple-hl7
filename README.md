# Creating a New Interface
To create a new interface, update `config.json` and restart the application.

# Testing Locally
Run `yarn test`

# Running Locally
First run:
`docker build -t medical-memory-hl7 .`

Then run:
`docker run -p 7700-7799:7700-7799 medical-memory-hl7`
