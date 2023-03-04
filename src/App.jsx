import PresentationCard from './pre/PresentationCard'
import './App.css'
import Contador from './contador/Contador'
import CountDown from './countDown/CountDown'
import List from './list/List'

function App() {

  return (
    <div className="App">
        <Contador /> 
        <CountDown/>
        <List />
      
    </div>
  )
}

export default App
