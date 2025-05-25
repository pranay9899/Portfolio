import { Outlet } from 'react-router-dom'; // Outlet renders the matched child route component
import Navbar from '../components/Navbar/Navbar'; // Import the Navbar component
import Footer from '../components/Footer/Footer'; // Import the Footer component
import styles from './Layout.module.css'; // Import CSS module for layout specific styles

function Layout() {
    return (
        <div className={styles.layoutContainer}>
            <Navbar /> {/* The navigation bar, visible on all pages */}
            <main className={styles.mainContent}>
                <Outlet /> {/* This is a placeholder where the content of the current route (e.g., Home, About) will be injected */}
            </main>
            <Footer /> {/* The footer, visible on all pages */}
        </div>
    );
}

export default Layout;