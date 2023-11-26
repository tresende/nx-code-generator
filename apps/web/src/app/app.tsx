import { Link, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

export function App() {
  return (
    <>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        {routes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  )
}

export default App
