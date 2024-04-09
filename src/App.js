import { AllRoutes } from "./routes/AllRoutes";
import {Header} from "./components/Header";
import {Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header/>
      <AllRoutes />
      <Footer/>
    </>
  )
}
