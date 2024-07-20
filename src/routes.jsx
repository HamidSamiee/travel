import Home from './components/Home/Home'
import Packages from './components/Pages/Packages'
import Shop from './components/Pages/Shop'
import Newes from './components/Pages/Newes'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import NotFound from './components/Pages/NotFound'

const routes=[
    {id: 1,path:'/',element:<Home />},
    {id: 2,path:'/packages',element:<Packages />},
    {id: 3,path:'/shop',element:<Shop />},
    {id: 4,path:'/newes',element:<Newes />},
    {id: 5,path:'/about',element:<About />},
    {id: 6,path:'/contact',element:<Contact />},
    {id: 7,path:'*',element:<NotFound />},
]

export default routes;