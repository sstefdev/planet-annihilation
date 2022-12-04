import Footer from '../Footer';
import Navbar from '../Navbar';

import styles from './styles.module.scss';

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
