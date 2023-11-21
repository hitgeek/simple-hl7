# NodeJS HL7 Inbound Interface App Readme

## Overview

NodeJS application serving as an HL7 inbound interface for handling HL7 messages over TCP. Containerized with Docker for ease of deployment and scalability.

## Components

- **TCP Client (`client/tcp-client.js`)**: Handles TCP connections, message transmission, and responses.
- **TCP Server (`server/tcp-server.js`)**: Receives, processes, and acknowledges HL7 messages.
- **HL7 Components (`hl7/`)**: Modules for parsing HL7 messages, segments, and fields.
- **Message Parsing (`parsers/`)**: Extracts information from HL7 message segments.
- **Utilities (`utils/`)**: Assists in data formatting and configuration.
- **Configuration (`config.js`)**: Configures application settings.

## Workflow

1. **Initialization**: Creates a TCP server instance and sets up middleware.
2. **Message Reception**: Parses and processes HL7 messages for data extraction.
3. **Processing**: Extracts and formats segment-specific information, with optional API integration.
4. **Acknowledgment**: Sends acknowledgments after message processing.
5. **Configuration**: Manages server settings and processing rules.
6. **Docker Deployment**: Deploys and scales the application using Docker.

## Development

- **Custom Middleware**: Enhance HL7 message processing with additional middleware in `index.js`.
- **Message Customization**: Adjust `parsers/` for specific HL7 message segment handling.
- **Configuration Updates**: Modify server settings and processing rules in `config.js`.
- **Error Handling**: Enhance error management in the middleware.

## Running the App

### Creating a New Interface
Update `config.json` and restart the application for new interfaces.

### Testing Locally
Run `yarn test` for local testing.

### Running Locally
Build the Docker image: `docker build -t medical-memory-hl7 .`

Then: `docker run -p 7700-7799:7700-7799 medical-memory-hl7`


## Prerequisites

- **Node.js**: Required for development.
- **HL7**: Understanding of HL7 message structures.
- **Docker**: Utilized for application deployment.

## Deploying to Aptible

### Repository Setup
Include your application and Dockerfile in a Git repository. The Dockerfile uses Node.js 20, installs dependencies, and exposes ports 7700-7799.

### Push to Aptible
Push the repository to an Aptible app with `git push aptible main`, replacing `aptible` and `main` as necessary.

### Build Process
Aptible automatically builds a Docker image from your Dockerfile, including Yarn-based dependency installation.

### Deployment Configuration
Configure deployment settings in Aptible, such as environment variables and resource allocation.

### Starting the Application
After the build, Aptible deploys and starts your app as per your Dockerfile's command (`yarn start`).

### Monitoring and Management
Utilize Aptible's tools for app management, scaling, and monitoring.
