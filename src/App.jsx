import PresentationCard from './pre/PresentationCard'
import './App.css'
import Contador from './contador/Contador'
import CountDown from './countDown/CountDown'
import ListView from './list/listView'

function App() {

  return (
    <div className="App">
      <PresentationCard />
      <Contador /> 
      <CountDown/>
      <ListView/>
    </div>
  )
}

export default App
