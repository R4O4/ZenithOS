# App Component Overview

This document provides an overview of the `App` component in the `App.tsx` file, which is part of a React application. The `App` component is responsible for rendering the main user interface of the application, including a taskbar and multiple movable windows.

## Structure

The `App` component is structured as follows:

- **CSS Import**: The component starts by importing a CSS stylesheet `style.css` for styling the application.
- **Component Imports**: It imports two custom components, `Taskbar` and `MovableWindow`, from their respective files within the `components` directory.
- **Function Component**: `App` is defined as a functional component in React.
- **Rendering**: Inside the return statement, the component renders:
  - A `<Taskbar />` component, representing the application's taskbar.
  - Multiple `<MovableWindow />` components, each representing a different window within the application. These windows are titled "Safari", "Note", "Plan", and "TextEdit", and each contains a paragraph of placeholder text.
- **External Script**: Lastly, a script `moveWindow.ts` is included at the bottom of the return statement, likely intended to provide functionality for moving the windows around.

## Key Features

- **Modular Design**: By using separate components for the taskbar and windows, the `App` component demonstrates a modular design approach, making the codebase more maintainable and scalable.
- **Reusable Components**: The `MovableWindow` component is reused multiple times with different props (`title` and `appName`), showcasing React's capability for component reusability.
- **External JavaScript Integration**: The inclusion of an external TypeScript file (`moveWindow.ts`) suggests an approach to extend the application's functionality with additional scripts.

## Usage

To use this component in a React application:

1. Ensure you have the `Taskbar` and `MovableWindow` components correctly set up in your project.
2. Place the `App.tsx` file in your project's source directory.
3. Import and use the `App` component in your main entry file (usually `index.js` or `index.tsx`).

## Conclusion

The `App` component serves as the entry point for a React application featuring a taskbar and movable windows. Its structure and implementation demonstrate key React concepts such as component modularity, reusability, and the integration of external scripts.

## Installation

## Installation

To install ZenithOS from the GitHub repository, you can follow these steps:

1. Clone the repository by running the following command in your terminal:
    ```
    git clone https://github.com/R4O4/ZenithOS.git
    ```

2. Change into the cloned directory:
    ```
    cd ZenithOS
    ```

3. Install the required dependencies by running:
    ```
    npm i
    ```

4. Compile the project by running:
    ```
    npm run dev
    ```

5. ZenithOS is running on http://localhost:5173/ZenithOS/

After completing these steps, ZenithOS should be successfully installed and running on your local machine.

Please note that these instructions assume you have Git and Node.js installed on your system. If not, make sure to install them before proceeding with the installation.
