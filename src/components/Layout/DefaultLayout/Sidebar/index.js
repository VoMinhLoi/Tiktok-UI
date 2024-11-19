import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/following">Following</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/upload">Upload</Link>
        </nav>
    );
};

export default Sidebar;
