import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Blog from "./features/Blog/components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
