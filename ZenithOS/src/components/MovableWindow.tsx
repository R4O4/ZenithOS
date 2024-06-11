import React, { useState } from 'react'

// Window Component

type MovableWindowProps = {
	title: string,
	x?: number,
	y?: number,
	children: React.ReactNode,
	appName: string,
	onClose?: () => void
}

export default function MovableWindow({ title, x, y, children, appName }: MovableWindowProps) {
	const [isDragging, setIsDragging] = useState(false)
	const [position, setPosition] = useState({ x: x, y: y })
	const [offset, setOffset] = useState({ x: 0, y: 0 })

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true)
		setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (isDragging) {
			setPosition({
				x: e.clientX - offset.x,
				y: e.clientY - offset.y
			})
		}
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	// Close the window on click on the close button
	const handleClose = () => {
		const appWindow = document.getElementById(appName)
		if (appWindow) {
			appWindow.style.display = 'none'
		}
	}

	const handleMaximize = () => {
		// Maximize the window
		const appWindow = document.getElementById(appName)
		if (appWindow) {
			appWindow.style.top = "10px"
			appWindow.style.left = "10px"
			appWindow.style.width = "calc(100% - 20px)"
			appWindow.style.height = "calc(100% - 95px)"
		}

	}

	const handleMinimize = () => {
		// Minimize the window
		const appWindow = document.getElementById(appName)
		if (appWindow) {
			appWindow.style.top = "10%"
			appWindow.style.left = "25%"
			appWindow.style.width = "50%"
			appWindow.style.height = "70%"
		}
	}


	return (
		<section className="app-window" id={appName} style={{ top: position.y, left: position.x, display: 'none' }} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
			<div className="app-window-topbar" onMouseDown={handleMouseDown}>
				<div className="app-window-topbar-btns">
					<button className="app-window-topbar-btn" onClick={handleClose}>
						<img src="../src/assets/app/close.svg" alt="close btn icon" />
					</button>
					<button className="app-window-topbar-btn" onClick={handleMinimize}>
						<img src="../src/assets/app/minimize.svg" alt="minimize btn icon" />
					</button>
					<button className="app-window-topbar-btn" onClick={handleMaximize}>
						<img src="../src/assets/app/maximize.svg" alt="maximize btn icon" />
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
