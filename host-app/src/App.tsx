import viteLogo from '/vite.svg'
import './App.css'
import { RemoteComponentWrapper } from './components/RemoteComponentWrapper'
import HostApp from './HostApp'
import { RemoteHeaderWrapper } from './components/RemoteHeaderWrapper'


function App() {
  const divStyle= {
    border: '2px solid blue',
    margin: '10px',
    padding: '10px'
  }
  return (
    <>
    <div>
      <RemoteHeaderWrapper />
    </div>
      <div style= {divStyle}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1> HOST APP</h1>
        <RemoteComponentWrapper />
        <HostApp/>
      </div>
    </>
  )
}

export default App
