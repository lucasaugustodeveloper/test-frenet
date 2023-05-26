import { createBrowserRouter } from 'react-router-dom'

import User from '../pages/users'
import Quotes from '../pages/quotes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Quotes />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/quotes',
    element: <Quotes />,
  },
])

export default router
