import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LoginPage from './login'
import PaymentMethodsPage from './paymentMethods'
import CategoriesPage from './categories'
import MainPage from './main'

const MainRouter = () => (
	<BrowserRouter basename={'/moneycounter'}>
		<Routes>
			<Route
				index
				path={'/'}
				element={<LoginPage />}
			/>
			<Route
				path={'/main'}
				element={<MainPage />}
			/>
			<Route
				path={'/paymentMethods'}
				element={<PaymentMethodsPage />}
			/>
			<Route
				path={'/categories'}
				element={<CategoriesPage />}
			/>
		</Routes>
	</BrowserRouter>
)

export default MainRouter
