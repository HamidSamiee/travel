import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"


const Layout = (Props) => {
    const {children}=Props;
  return (
    <div className='container md:max-w-screen-xl'>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}

export default Layout