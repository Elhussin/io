
# Portfolio Website

This is my personal portfolio website where I showcase my skills, certifications, and projects. It also includes a contact section for connecting with me through various platforms like GitHub, LinkedIn, and email.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Structure](#structure)
- [Customizing](#customizing)`  
- [Contribution](#contribution)
- [Contact](#contact)
- [Screenshots](#Screenshots)
- [License](#license)

## Features

- **Responsive Design**: The website is fully responsive and adapts to different screen sizes.
- **Dark Mode**: Toggle between dark and light modes for better viewing experience.
- **Projects Section**: Displays a grid of projects with links to view more details and visit external project pages.
- **Certificates Section**: Displays a collection of certificates from various courses like Harvard, Shiyar Academy, and more.
- **Contact Section**: Provides various ways to contact me through email, social media, and WhatsApp.
- **Modern UI/UX**: Designed with modern web design principles and tailored to provide an intuitive user experience.

## Installation

To run this portfolio website locally, follow the instructions below:

### Prerequisites

- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

   This will start the website locally at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for creating custom designs.
- **React Icons**: For the social media icons (GitHub, LinkedIn, etc.).
- **Lucide Icons**: For various interactive icons.
- **LocalStorage**: To save the user's dark/light mode preference.
- **HTML**: For structuring the pages.
- **CSS**: For styling and designing the website.
- **JavaScript**: For adding interactivity and dynamic functionality.
- **GitHub Pages**: For deploying the site directly from a GitHub repository.
- **Git**: For version control and managing updates.


## Structure

- **`/public`**: Contains all the static assets like images, icons, and the `index.html` file.
- **`/src`**: Contains the React components and application logic.
  - **`/components`**: The individual React components such as Header, Projects, Certificates, Footer, etc.
  - **`/data`**: Holds the data used in the components (such as certificates and project details).
  - **`App.js`**: Main React component that includes all sections and routes.
- **`/styles`**: Contains Tailwind CSS configuration.

## Customizing

### 1. Change the Name in the Header:
Edit the `<h1>` tag in `App.js` to reflect your own name.

```jsx
<h1 className="text-4xl font-bold text-gray-900 mb-4">Hello, I'm [Your Name]</h1>
```

### 2. Adding Projects:
To add or modify projects, update the `datiles` object in the `data.js` file with the details of your projects.

```javascript
const project = {
  data: [
    {
      id: 1,
      title: "Project Title",
      description: "A brief description of the project.",
      link: "https://example.com",
      img: "project-image.jpg",
    },
    // Add more projects here
  ]
};
```

### 3. Adding Certificates:
You can add new certificates by modifying the `certificates` array in the `data.js` file. Each certificate should have a title, description, and image.

```javascript
const certificates = [
  {
    title: "Web Programming Certificate from Harvard",
    description: "A certificate in web programming from the CS50 course by Harvard University.",
    image: "CS50Web.png",
  },
  // Add more certificates here
];
```


## Contribution

Feel free to fork this repository, clone it, and submit pull requests if you want to contribute improvements or add new features. If you find any issues, open an issue in the GitHub repository.

We welcome contributions! To contribute, follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## Contact

If you have any questions or suggestions, feel free to contact me at:
- **Email**: [hasin3112@gmail.com](mailto:hasin3112@gmail.com)
- **GitHub**: [https://github.com/Elhussin](https://github.com/Elhussin)
- **LinkedIn**: [https://www.linkedin.com/in/elhusseini2023](https://www.linkedin.com/in/elhusseini2023)
- **WhatsApp**: [https://wa.me/+966540919725](https://wa.me/+966540919725)

## Screenshots
![Home Page](path/to/screenshot.png)

## License

This project is open-source and available under the [MIT License](LICENSE).
