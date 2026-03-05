# VISA NAVIGATOR

Live site URL:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## My website features

- Navbar: The Navbar contains the website name, Home, All Visas, Add Visa (protected route), My added visas (protected route), My visa applications (protected route), conditional Login, Register, Logout buttons and the user photoURL with hover effect;

- Authentication: There are Login and Register pages with a form including a Social Login Button (Google only) at each page, for the user to Login and Register himself in the application. The user is navigated to the desired route on successful login or registration, shown an error message if not;

- Home Page: The home page has the sections Navbar, Slider, Latest visas section, 2 extra sections: Dependable visa, our users and footer;

- Modals with buttons: Modals with buttons are used to display forms in the pages: Add Visa, Visa Details (protected route), My added visas, for the user to fill in those forms, and click on the buttons: "Add visa", "Apply for the visa" or the "Update", to perform the required action in those pages as well as in the databases.

- For all the CRUD operations, relevant sweet alert is shown with a meaningful message.

- Dark/light theme, Search functionalities: Implemented dark/light theme for the home page, as well as search functionality on the "My visa applications" page based on the country name through an input field and a search button.
