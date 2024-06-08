import './css/style.css'
import Taskbar from './components/Taskbar'
import MovableWindow from './components/MovableWindow'

function App() {

  return (
    <>
      <Taskbar />
      <MovableWindow title="Une Fenêtre">
        <p>Contenu de la fenêtre</p>
      </MovableWindow>
      
      <script src="./typescript/moveWindow.ts"></script>
    </>
  )
}

export default App
