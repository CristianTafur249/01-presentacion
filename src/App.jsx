import PresentationCard from './pre/PresentationCard'
import './App.css'
import Contador from './contador/Contador'
import CountDown from './countDown/CountDown'
import List from './list/List'

function App() {

  return (
    <div className="App">
      <PresentationCard />
        <Contador /> 
        <CountDown/>
        <List />
      
    </div>
  )
}

export default App
