import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import GuestLayout from './Components/Layout/GuestLayout/GuestLayout'


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<GuestLayout/>} >

      </Route>



      </Routes>
    </Router>
  )
}

export default App