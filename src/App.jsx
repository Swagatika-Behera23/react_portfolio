// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Skill from "./components/Skill";
// import Project from "./components/Project";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";

// function App() {
 

//   return (
//     <>
//       <div>
//             <Navbar />
//             <About />
//             <Skill />
//             <Project />
//             <Contact />
//             <Footer />
//           </div>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import Navbar from './components/Navbar';

import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import './App.css'
export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
