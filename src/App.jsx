import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import Companies from "./components/Companies.jsx"
import Parallax from "./components/Parallax.jsx"

export default function App() {
  return (
    <>
      <div className="bg-[#F1F0EE] h-full w-screen overflow-hidden relative">
        <NavBar />
        <Hero />
        <Features />
        <Companies />
        <Parallax />

      </div>
    </>
  )
}
