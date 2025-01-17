import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/registration',
		element: <Registration />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
