import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from 'utils/context';
import App from './App';

import 'styles/main.scss';
import Layout from './components/ui/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Layout>
			<BrowserRouter>
				<ContextProvider>
					<App />
				</ContextProvider>
			</BrowserRouter>
		</Layout>
	</React.StrictMode>
);
