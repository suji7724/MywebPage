import { useState } from 'react';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
    { id: 1, title: 'To-Do List App', description: 'A task management app built with React.', link: '#', demo: '#' },
    { id: 2, title: 'E-Commerce Store', description: 'A mock online store.', link: '#', demo: '#' },
    { id: 3, title: 'Portfolio Website', description: 'I created a portfolio website using html,css and javascript.', link: 'https://suji7724.github.io/', demo: '#' },
  ]);

  const [skills] = useState(['HTML', 'JavaScript', 'REACT', 'Python', 'Tailwind CSS', 'Node.js']);

       return (
         <div className="min-h-screen">
           <Header toggleTheme={toggleTheme} theme={theme} />
           <Hero />
           <About />
           <Skills skills={skills} />
           <Projects projects={projects} />
           <Contact />
           <Footer />
         </div>
       );
     }

     export default App;
