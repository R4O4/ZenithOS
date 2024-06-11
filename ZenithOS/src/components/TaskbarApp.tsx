type TaskbarAppProps = {
  icon: string,
  name: string
}

export default function TaskbarApp({ icon, name }: TaskbarAppProps) {
  function openWindow({ name }: { name: string }) {
    const app: HTMLElement | null = document.querySelector(`#${name}`);
    if (app) {
      if (app.style.display === "none") {
        app.style.display = "block";
      } else {
        app.style.display = "none";
      }
    }
  }

  return (
    <button className="taskbar-center-app" onClick={() => openWindow({ name })}>
      <p className="app-title">{name}</p>
      <img src={"../src/assets/app/" + icon} alt={name + " icon"} />
    </button>
  )
}