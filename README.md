# Pinterest Clone

This project is a Pinterest clone built using EJS, JavaScript, and a backend server. The application mimics the core functionality of Pinterest, allowing users to create, view, and manage collections of images (pins).

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Create & Manage Pins**: Users can create, edit, and delete pins (images).
- **Boards**: Users can organize pins into boards.
- **Search & Explore**: Browse and search for pins across different categories.
- **Responsive Design**: The application is fully responsive and works on both desktop and mobile devices.

## Technologies

- **Frontend**: HTML, CSS, JavaScript, EJS (Embedded JavaScript templating)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or any other database used)
- **Authentication**: Passport.js (or any other authentication library used)
- **File Storage**: Cloudinary, AWS S3 (or any other service used for storing images)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/HITESH-1001/pin
    cd pin
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    DATABASE_URL=<your-database-url>
    CLOUDINARY_URL=<your-cloudinary-url>
    SESSION_SECRET=<your-session-secret>
    ```

4. Run the application:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Sign Up/Log In**: Create an account or log in with existing credentials.
- **Create a Pin**: Upload an image, add a title and description, and save it as a pin.
- **Organize Pins**: Create boards and organize your pins into different categories.
- **Explore**: Browse and search for pins from other users.

## Folder Structure


- `public/` - Contains static files such as CSS, JavaScript, images, and uploads.
- `views/` - Contains EJS templates for rendering pages.
- `routes/` - Contains route definitions for the application.
- `models/` - Contains database models for users, pins, etc.
- `app.js` - The main application file where the server is set up.
- `.env` - Environment variables file (should be kept secret).
- `package.json` - Lists dependencies and scripts.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
