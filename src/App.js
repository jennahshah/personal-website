// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe.js'
import ProjectCard from './components/ProjectCard.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //bootstrap won't work without this
import ProjectsData from './components/ProjectsData.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <ProjectCard projects={ProjectsData} />
      {/* about me w/ some sort of floating animation */}
      {/* projects w/ links and descriptions */}
      {/* skills listed cutesy somehow */}
    </div>
  );
}

export default App;
