type TaskbarAppProps = {
  icon: string,
  name: string
}

export default function TaskbarApp({icon, name}: TaskbarAppProps) {
  return (
    <button className="taskbar-center-app" onClick={() => openWindow({name})}>
        <p className="app-title">{name}</p>
      <img src={"../src/assets/app/"+icon} alt={name+" icon"} />
    </button>
  )
}