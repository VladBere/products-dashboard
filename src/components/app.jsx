import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from '../config/routes'
import { ErrorPage } from '../pages/error-page'
import { HomePage } from '../pages/home-page'
import { UserPage } from '../pages/user-page'
import { UsersPage } from '../pages/users-page'
import { ProductPage } from '../pages/product-page'

import { Layout } from './layout'

export const App = () => {
    const router = createBrowserRouter([
        {
            path: routes.home,
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: routes.users,
                    element: <UsersPage />
                },
                {
                    path: routes.user,
                    element: <UserPage />
                },
                {
                    path: routes.products,
                    element: <ProductPage />
                }
            ]
        },
        {
            path: '*',
            element: <ErrorPage />
        }
    ])

    return <RouterProvider router={router} />
}
