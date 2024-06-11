import './css/style.css'
import Taskbar from './components/Taskbar'
import MovableWindow from './components/MovableWindow'

function App() {

  return (
    <>
      <Taskbar />
      <MovableWindow title="Safari" appName='Safari'>
        <p>Contenu de la fenêtre</p>
      </MovableWindow>
      <MovableWindow title="Note" appName='Note'>
        <p>Contenu de la fenêtre</p>
      </MovableWindow>
      <MovableWindow title="Plan" appName='Plan'>
        <p>Contenu de la fenêtre</p>
      </MovableWindow>
      <MovableWindow title="TextEdit" appName='TextEdit'>
        <p>Contenu de la fenêtre</p>
      </MovableWindow>

      <script src="./typescript/moveWindow.ts"></script>
    </>
  )
}

export default App
