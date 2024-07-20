
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import routes from './routes'


function App() {
  

  return (
      <Layout>
            <Routes>
              {
                routes.map((route)=>{
                   return <Route key={route.id} path={route.path} element={route.element} />
                })
              }  
            </Routes>
      </Layout> 
  )
}

export default App
