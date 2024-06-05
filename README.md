# Apna Mall Application

## Overview
Apna Mall is a modern, feature-rich e-commerce application built using React.js. It offers a beautiful user interface for managing products with the capabilities to create, read, edit, and delete products. The application uses an external API for fetching product data and includes functionalities such as filtering products by category and displaying notifications using React Toastify.

## Features
- **Create Products:** Add new products to the inventory.
- **Read Products:** View a list of all available products.
- **Edit Products:** Modify existing product details.
- **Delete Products:** Remove products from the inventory.
- **Filter Products:** Filter products based on category.
- **Beautiful Notifications:** Display popup messages for actions using React Toastify.

## Technologies Used
- **React.js:** Front-end library for building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **React Toastify:** Library for showing beautiful toast notifications.
- **Getting Universe.io Loader:** Loader for displaying loading effects during data fetching.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/apna-mall.git
    ```
2. Navigate to the project directory:
    ```bash
    cd apna-mall
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Deployment
The application is deployed and accessible online. You can access it [here](https://apanmall.netlify.app/).


## Project Structure
```plaintext
apna-mall/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Create.jsx
│   │   ├── Details.jsx
│   │   ├── Edit.jsx
│   │   ├── Loading.jsx
│   │   ├── Nav.jsx
│   │   └── ...
│   ├── utiles/
│   │   ├── Context.jsx
│   │   ├── axios
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── tailwind.config.js
├── package.json
└── ...
```

## Description

The application utilizes Tailwind CSS for layout and styling, ensuring a responsive and aesthetically pleasing design. React Toastify is employed to display notifications for various actions like product creation, updates, and deletions, providing a smooth user experience. A loader from Getting Universe.io indicates loading states during data fetching, enhancing the overall user experience by providing visual feedback while data is being retrieved. Users can filter products based on categories, making it easier to find specific items within the inventory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.


## Contact

For any questions or feedback, please reach out to rishirajanand5@gmail.com.
