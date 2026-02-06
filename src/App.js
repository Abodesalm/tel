import { useEffect } from "react";
import "./App.css";
import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { Packages } from "./components/Packages";
import { Branches } from "./components/Branches";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Set initial dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="App min-h-screen bg-background" dir="rtl" data-testid="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <WhyUs />
        <Packages />
        <Branches />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;