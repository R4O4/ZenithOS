import './css/style.css'
import Taskbar from './components/Taskbar'
import AppWindow from './components/AppWindow'

function App() {

  return (
    <>
      <Taskbar />
      <AppWindow title="testapp" appName="testapp" id={1}>
        <section className="test">
          <h1>oqzkndqklndqzlkdn</h1>
          <p>qlkdjzqkldnqlzkdnqzdklmkzjdqmkzdqzmkdjqzmdknq</p>
        </section>
      </AppWindow>
    </>
  )
}

export default App
