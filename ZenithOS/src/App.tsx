import './css/style.css'
import Taskbar from './components/Taskbar'
import MovableWindow from './components/MovableWindow'

function App() {

  return (
    <>
      <Taskbar />
      <MovableWindow title="Une Fenêtre" appName='testapp'>
        <p>Contenu de la fenêtre</p>
      </MovableWindow>
      <MovableWindow title="Bite" appName='bite' x={200} y={300}>
        <p>Contenu de la fenêtre</p>
      </MovableWindow>

      <script src="./typescript/moveWindow.ts"></script>
    </>
  )
}

export default App
