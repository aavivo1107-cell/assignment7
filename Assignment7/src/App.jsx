import Header from './component/Header'
import Namecomponent from './component/Namecomponent'
import AGEcomponent from "./component/Age"
import Datacomponent from './component/Datacomponent'
import "./App.css"
function App() {

  return (
    <div className='App'>
    <Header/>
    <Namecomponent/>
    <AGEcomponent/>
    <main>
    <Datacomponent/>
    </main>
    </div>
    )
  
}

export default App