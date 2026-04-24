import { useState } from 'react';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const [projects] = useState([
    { id: 1, title: 'Property Listing WebApp', description: 'A Property listing webapp that uses React for frontend and node.js for Backend. in this the user can list their property and also user can find the property to rent.', link: 'https://github.com/suji7724/rentease', demo: 'https://rentease-iota.vercel.app/' },
    { id: 2, title: 'AI-Recipe generator', description: 'AI Recipe Generator is a full-stack web application that uses AI to generate recipes based on available ingredients and user preferences. It helps users discover meals, reduce food waste, and plan cooking efficiently.', link: 'https://github.com/suji7724/Ai-recipe-Generator', demo: '#' },
    { id: 3, title: 'Portfolio Website', description: 'I created a portfolio website using React.js and tailwindCss ,where i showcases my skills and projects on that i have worked.', link: 'https://github.com/suji7724/MywebPage', demo: 'https://suji7724.github.io/MywebPage/' },
  ]);

  const [skills] = useState(['HTML','CSS', 'JavaScript', 'REACT','Node.Js', 'Python', 'Django', 'SQL',]);

       return (
         <div className="min-h-screen">
           <Header toggleTheme={toggleTheme} theme={theme} />
           <div className='pt-16'>
              <Hero />
              <About />
              <Skills skills={skills} />
              <Projects projects={projects} />
              <Contact />
              <Footer />
           </div>
         </div>
       );
     }

     export default App;
