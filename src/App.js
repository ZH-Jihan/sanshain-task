import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Order from "./chack";
import Home from "./Component/Home/Home";
import About from "./Component/Pages/About";
import AllProduct from "./Component/Pages/AllProduct";
import Blog from "./Component/Pages/Blog";
import Blogs from "./Component/Pages/Blog/Blog";
import Addreview from "./Component/Pages/Dashbord/Addreview";
import Dashbord from "./Component/Pages/Dashbord/Dashbord";
import OrderTabel from "./Component/Pages/Dashbord/OrderTabel";
import Pofile from "./Component/Pages/Dashbord/Pofile";
import Login from "./Component/Pages/Login";
import Notpound from "./Component/Pages/Notpound";
import Portfoliyo from "./Component/Pages/Portfoliyo";
import ProductDetail from "./Component/Pages/ProductDetail";
import Registar from "./Component/Pages/Registar";
import Footer from "./Component/Shared/Footer";
import Loading from "./Component/Shared/Loading";
import Navber from './Component/Shared/Navber';
import RequireAuth from "./Component/Shared/RequireAuth";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
    {loading ? (
      <Loading></Loading>
    ) : (
      <div>
      <Navber></Navber>
      <Routes>
        <Route path="/check" element={<Order></Order>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product" element={<AllProduct></AllProduct>}></Route>
        <Route path="/portfolio" element={<Portfoliyo></Portfoliyo>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/dashbord" element={<RequireAuth><Dashbord></Dashbord></RequireAuth>}>
          <Route index element={<Pofile></Pofile>}></Route>
          <Route path="/dashbord/myprofile" element={<Pofile></Pofile>}></Route>
          <Route path="/dashbord/myreview" element={<Addreview></Addreview>}></Route>
          <Route path="/dashbord/myorder" element={<OrderTabel></OrderTabel>}></Route>
        </Route>
        <Route path="/product/:id" element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registar" element={<Registar></Registar>}></Route>
        <Route path="*" element={<Notpound></Notpound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
    )}
    </>
  );
}

export default App;
