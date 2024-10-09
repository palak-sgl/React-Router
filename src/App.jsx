import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Personal from "./pages/Personal.jsx";
import Preferences from "./pages/Preferences.jsx";
import Security from "./pages/Security.jsx";
import Demo from "./pages/Demo.jsx";
import Profilepictures from "./pages/Profilepictures.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Personal />} />
      <Route path="preferences" element={<Preferences />} />
      <Route path="security" element={<Security />} />
      <Route path="demo" element={<Demo />} />
      <Route path="profilepictures" element={<Profilepictures />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
