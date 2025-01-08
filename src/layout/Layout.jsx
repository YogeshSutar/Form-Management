import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';
const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default Layout
// import Footer from '../components/Footer';
// // import Header from '../components/Header';

// const Layout = ()=>{
//     return(
//         <div>
//             {/* <Header/> */}

//             <Footer/>
//         </div>
//     )
// }

// export default Layout