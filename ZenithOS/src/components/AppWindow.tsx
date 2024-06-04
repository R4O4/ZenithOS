type AppWindowProps = {
  title: string,
  id: number,
  appName: string,
  children: React.ReactNode,
  onClose?: () => void
}

export default function AppWindow({title, id, children, onClose}: AppWindowProps) {
  return (
    <section className={"app-window "+id}>
     <div className="app-window-topbar">
        <div className="app-window-topbar-btns">
          <button className="app-window-topbar-btn">
            <img src="src/assets/app/close.svg" alt="close btn icon" />
          </button>
          <button className="app-window-topbar-btn">
            <img src="src/assets/app/minimize.svg" alt="minimize btn icon" />
          </button>
          <button className="app-window-topbar-btn">
            <img src="src/assets/app/maximize.svg" alt="maximize btn icon" />
          </button>
        </div>
        <p className="app-window-topbar-title">{title}</p>
     </div>
     <div className="app-window-content">
        {children}
     </div>
    </section>
  )
}