import viteLogo from '/vite.svg'
import './App.css'
import { RemoteComponentWrapper } from './components/RemoteComponentWrapper'
import HostApp from './HostApp'

function App() {

  return (
    <>
      <div>
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
