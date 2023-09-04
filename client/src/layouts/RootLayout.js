//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'

/**
 * Repraensentiert das Hauptlayout
 * welches alles anderen Layouts
 * passend importiert und wie react-router
 * sicherstellt das die Inhalte an stelle
 * des Outlet Tags angezeigt werden.
 */
export default function RootLayout() {
    function Header() {
        return (
            <header>
                <div className='App-header'>

                    <div className="company-information">
                        <h1></h1>
                        <p></p>
                    </div>

                    <div className='top-nav'>
                        <nav>
                            <NavLink to="/" end>Start</NavLink>
                            <NavLink to="/generate_report">Create Report</NavLink>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }

    function MainContent() {
        return (
            <main>
                <Outlet />
            </main>
        );
    }

    function Footer() {
        return (
            <footer>
                <nav>
                    <NavLink to="/">Impressum</NavLink>
                    <NavLink to="/">Datenschutz</NavLink>
                </nav>
            </footer>
        );
    }

    return (
        <div className="root-layout">
            <Header />
            <MainContent />
            {/* <Footer /> */}
        </div>
    );
}