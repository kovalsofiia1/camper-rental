Camper Rental Application
Description
This project is a camper rental application designed for a company that offers camper rental services in Ukraine. The application consists of three main pages:

Home Page: Provides a general description of the services offered by the company.
Catalog Page: Contains a catalog of various campers that users can filter by location, equipment, and type.
Favorites Page: Displays advertisements that the user has added to their favorites.
The application's appearance includes navigation (styled as per your preference) and a viewing area.

Technical Requirements
Advertisement Card
Implement an advertisement card for camper rental based on the provided mockup.
The first page of the catalog should render 4 advertisements, with the rest loading upon clicking the "Load more" button.
Clicking the heart-shaped button on an advertisement card adds it to the favorites list and changes the button's color.
The user's actions should be preserved upon page reloads. For example, if an advertisement is added to favorites and the page is refreshed, the button should remain in the "favorite" state with the appropriate color.
Clicking the heart-shaped button again removes the advertisement from the favorites list and reverts the button's color to its initial state.
Clicking the "Show more" button opens a modal with detailed information about the camper.
The modal should close upon clicking the close button (cross icon), clicking on the backdrop, or pressing the Esc key.
Modal Window
The modal contains information about the camper's features and reviews.
The displayed information should depend on the active tab state.
The modal also includes a booking form with fields for name, email, booking date, and comment.
The fields for name, email, and booking date are mandatory and should be validated. (The form should not be submitted if the data is invalid, and the page should refresh upon a successful submission.)
The rental price should be a single value (e.g., 8000) and displayed with a comma in the UI (8000,00).
Backend
Create a personal backend for development using the UI service mockapi.io.
Create a resource named adverts and describe the advertisement object as outlined below.
Advert
Create an advert in Mockapi with the following fields: _id, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews.
Populate the collection with at least 13 advertisements with varying values.
Implement pagination, with each page containing 4 advertisements.
Routing
Implement routing using React Router.
The application should have the following routes:
/: Home page with a general description of the services offered by the company.
/catalog: Catalog page with various camper configurations.
/favorites: Favorites page (styled as per your preference), displaying advertisements added to favorites by the user.
Redirect the user to the home page if they navigate to a nonexistent route.
Technologies Used
React
Redux
Redux Toolkit
Mockapi
React Datepicker
React Hook Forms
Setup and Installation
Clone the repository:

sh
Копіювати код
git clone <repository_url>
cd camper-rental-app
Install the dependencies:

sh
Копіювати код
npm install
Start the development server:

sh
Копіювати код
npm start
Access the application at http://localhost:3000.

Available Scripts
In the project directory, you can run:

npm start: Runs the app in the development mode.
npm test: Launches the test runner in the interactive watch mode.
npm run build: Builds the app for production to the build folder.
npm run eject: Removes the single build dependency from your project.
Contact
For any inquiries or feedback, please contact [your-email@example.com].