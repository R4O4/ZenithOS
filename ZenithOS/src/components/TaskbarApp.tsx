type TaskbarAppProps = {
  icon: string,
  onClick?: () => void,
  name: string
}

export default function TaskbarApp({icon, onClick, name}: TaskbarAppProps) {
  return (
    <button className="taskbar-center-app">
        <p className="app-title">{name}</p>
      <img src={"../src/assets/app/"+icon} alt={name} onClick={onClick} />
    </button>
  )
}