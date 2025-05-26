import { Outlet } from 'react-router-dom'; // Imports the Outlet component from react-router-dom to render nested routes.
import Navbar from '../components/Navbar/Navbar'; // Imports the Navbar component.
import Footer from '../components/Footer/Footer'; // Imports the Footer component.
import styles from './Layout.module.css'; // Imports CSS modules for styling the Layout component.

function Layout() {
    return (
        <div className={styles.layoutContainer}>
            <Navbar /> {/* Renders the Navbar component at the top of the layout, making it visible on all pages. */}
            <main className={styles.mainContent}>
                {/* The Outlet component acts as a placeholder. 
                  It will render the content of the currently matched nested route.
                  For example, if the route is '/', it will render the Home page; 
                  if '/about', it will render the About page, and so on.
                */}
                <Outlet />
            </main>
            <Footer /> {/* Renders the Footer component at the bottom of the layout, visible on all pages. */}
        </div>
    );
}

export default Layout; // Exports the Layout component to be used as the main structure for the application's routes.