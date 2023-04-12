import './App.css'
import { Profile } from './components/Profile/Profile'
import { Proyects } from './components/Proyects/Proyects'
import { Techs } from './components/Techs/Techs'

function App () {
  return (
    <div className="App">
      <div className='container'>
        <h1>Mi portfolio</h1>
        <Profile />
        <h2>Mis proyectos</h2>
        <Proyects />
        <h2>Mi Formación</h2>
        <Techs />
      </div>
    </div>
  )
}

export default App
