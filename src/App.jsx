import { BrowserRouter, Routes, Route } from "react-router-dom"
import Portfolio from "./pages/portfolio/portfolio"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
