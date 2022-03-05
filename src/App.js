import AllBobaShopsPage from "./pages/AllBobaShopsPage";
import NewBobaShopPage from "./pages/NewBobaShopPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllBobaShopsPage />} />
        <Route path="newbobashop" element={<NewBobaShopPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
