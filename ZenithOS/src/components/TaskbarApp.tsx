type TaskbarAppProps = {
  icon: string,
  onClick?: () => void,
  name: string
}

export default function TaskbarApp({icon, onClick, name}: TaskbarAppProps) {
  return (
    <button className="taskbar-center-app">
      <img src={"../src/assets/app/"+icon} alt={name} onClick={onClick} />
    </button>
  )
}