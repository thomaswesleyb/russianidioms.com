# Russianidioms.com

This repository contains the source code for russianidioms.com, a web app that serves as a database for Russian idioms with English translations, and provides a space to store resources for learning Russian.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites
- Node.js
- npm
- Java
- Maven

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/thomaswesleyb/russianidioms.com.git
    cd russianidioms.com
    ```

2. Install the frontend dependencies:
    ```bash
    cd slavophilenet
    npm install
    ```

3. Install the backend dependencies:
    ```bash
    cd ../backend
    mvn install
    ```

4. Set up the database:
    - Ensure you have a running SQL database.
    - Update the database configuration in `application.properties`.

5. Start the backend server:
    ```bash
    mvn spring-boot:run
    ```

6. Start the frontend server:
    ```bash
    cd ../slavophilenet
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the login button to authenticate.
3. Browse and search for Russian idioms.
4. Access additional resources for learning Russian.

## Features

- User authentication with Auth0
- Database of Russian idioms with English translations
- Dark mode toggle
- User profile management
- Responsive design

## Technologies Used

- **Frontend**: React, Bootstrap, CSS
- **Backend**: Java, Spring Boot
- **Database**: SQL
- **Authentication**: Auth0

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact:
- **Thomas Wesley**: [thomaswesleyb@example.com](mailto:thomaswesleyb@example.com)