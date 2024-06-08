import TaskbarApp from './TaskbarApp'

export default function Taskbar() {
  return (
    <section className="taskbar">
      <div className="taskbar-center-apps">
        <TaskbarApp icon="safari.png" name="Safari"/>
        <TaskbarApp icon="note.png" name="Note" />
        <TaskbarApp icon="plan.png" name="Plan" />
        <TaskbarApp icon="textedit.png" name="TextEdit" />
        <TaskbarApp icon="settings.png" name="Paramètres" />
      </div>
    </section>
  )
}