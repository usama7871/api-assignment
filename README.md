# API Assignment

This project demonstrates the usage of **Next.js** to fetch and display data from the **JSONPlaceholder API**. It is a simple web application that showcases posts fetched from an external API and displays them in a user-friendly interface.

## Features

- Fetches data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
- Displays a list of posts in a clean UI
- Modular structure to easily add more features and functionalities

## Installation

To get started with the project locally, follow these steps:

### Prerequisites

- Ensure that you have **Node.js** and **npm** installed on your machine.

### Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/usama7871/api-assignment.git
=======

```markdown
# API Assignment

This project demonstrates the usage of **Next.js** to fetch and display data from the **JSONPlaceholder API**. It is a simple web application that showcases posts fetched from an external API and displays them in a user-friendly interface.

## Features

- Fetches data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
- Displays a list of posts in a clean UI
- Modular structure to easily add more features and functionalities

## Installation

To get started with the project locally, follow these steps:

### Prerequisites

- Ensure that you have **Node.js** and **npm** installed on your machine.

### Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/usama7871/api-assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd api-assignment
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Project Structure

The project follows a simple directory structure:

```
.
├── app
│   ├── api
│   │   └── external
│   │       └── route.ts       # API route to fetch posts from JSONPlaceholder
│   ├── fetch-posts
│   │   └── page.tsx           # Page to display posts
│   ├── about.tsx              # About page
│   └── contact.tsx            # Contact page
├── public
│   └── ...                    # Static assets
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## License

This project is open source and available under the [MIT License](LICENSE).

