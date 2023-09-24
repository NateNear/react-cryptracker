import Dashboard from "./pages/Dashboard/dashboard"
import { auth } from '../firebase-auth/firebase.js'
import { useEffect } from "react"
function App() {


  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      console.log(user);
    })
  }, [])
  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
