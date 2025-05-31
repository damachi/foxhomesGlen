import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home.jsx";
import Property from "@/pages/Property.jsx";
import Guide from "@/pages/Guide.jsx";
import Contact from "@/pages/Contact.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import Page404 from "@/pages/404.jsx";
import PropertyDetails from "@/pages/PropertyDetails.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*
          <Route path="/moving" element={<Moving />} />
            */}
          <Route path="/listings/detail/:slug" element={<PropertyDetails />} />
          <Route path="/listings/:type" element={<Property />} />
          <Route path="/guide" element={<Guide />}>
            <Route path="renting" element={<Home />} />
            <Route path="buying" element={<Guide />} />
            <Route path="selling" element={<Guide />} />
            <Route path="moving" element={<Guide />} />
            <Route path="financing-insurance" element={<Dashboard />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          {/*
          <Route path="/testimony" element={<Testimony />} />
          */}
          {/*
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="properties" element={<DashboardProperty />} />
            <Route path="properties/add" element={<DashboardAddProperty />} />
            <Route
              path="properties/:id"
              element={<DashboardDetailsProperty />}
            />
            <Route
              path="properties/:id/edit"
              element={<DashboardEditProperty />}
            />
          </Route>
          */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors expand={true} position="top-right" />
    </>
  );
}

export default App;
