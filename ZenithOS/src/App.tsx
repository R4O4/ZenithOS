import './css/style.css'
import TaskbarApp from './components/TaskbarApp'

function App() {

  return (
    <>
      <section className="taskbar">
        <div className="taskbar-center-apps">
          <TaskbarApp icon="safari.png" name="Finder" />
          <TaskbarApp icon="note.png" name="Safari" />
          <TaskbarApp icon="plan.png" name="App Store" />
          <TaskbarApp icon="textedit.png" name="Launchpad" />
          <TaskbarApp icon="settings.png" name="Settings" />
        </div>
      </section>
    </>
  )
}

export default App
