# URL Shortener with Click Tracking

This is a simple URL shortener application built using Node.js, MongoDB, and following the MVC architecture. The application allows you to shorten long URLs and provides the ability to track the number of clicks on each shortened link.

## Features

- Shorten long URLs into short and manageable links.
- Track the number of clicks on each shortened link.
- Follows the Model-View-Controller (MVC) architecture for organized code structure.
- Uses MongoDB as the database to store shortened URLs and click data.
- No frontend included, API endpoints can be used with tools like Postman or for integration with a frontend application.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/your-username/url-shortener.git
   ```

2. Navigate to the project directory:

   ```
   cd url-shortener
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Configure MongoDB connection:

   Edit the `config.js` file in the `config` folder and update the MongoDB connection URI as needed.

5. Start the server:

   ```
   npm start
   ```

## Usage

### Shorten URL

- **Endpoint:** `POST /api/url/shorten`
- **Request Body:**
  ```json
  {
    "originalUrl": "https://www.example.com"
  }
  ```
- **Response:**
  ```json
  {
    "shortUrl": "http://localhost:3000/abc123"
  }
  ```

### Get Click Count

- **Endpoint:** `GET /api/url/:shortUrl`
- **Response:**
  ```json
  {
    "originalUrl": "https://www.example.com",
    "shortUrl": "http://localhost:3000/abc123",
    "clickCount": 5
  }
  ```

## Contribution

Contributions are welcome! If you want to enhance the functionality or fix any issues, feel free to submit pull requests.

## Future Enhancements

- Implement user authentication and ownership tracking for shortened URLs.
- Create a frontend interface for easy interaction.
- Add analytics and more detailed click tracking features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Remember that this readme assumes you have some understanding of Node.js, MongoDB, and the MVC architecture. If you are not familiar with these concepts, you might need to explore them further or refer to documentation and tutorials to get started.
