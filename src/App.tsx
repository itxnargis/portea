import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutPage from "./pages/About"
import InvestorRelationsPage from "./pages/InvestorRelations"
import BookNowPage from "./pages/BookNow"
import Footer from "./components/Footer"
import ServiceDetail from "./pages/ServiceDetail"
import Service from "./pages/Service"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/services" element={<Service />} />
             <Route path="/services/:service" element={<ServiceDetail />} />
              <Route path="/investor-relations" element={<InvestorRelationsPage />} />
               <Route path="/book-now" element={<BookNowPage />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  )
}

export default App
