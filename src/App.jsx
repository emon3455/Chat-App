import { Route, Routes } from "react-router-dom"
import NavigationBar from "./Components/NavigationBar"
import ChatRoom from "./Pages/ChatRoom"
import Login from "./Pages/Login"
import PrivateRoutes from "./Routes/PrivateRoutes"
import { AuthProvider } from "./Context/AuthContext"

function App() {

  return (
    <AuthProvider>

      <NavigationBar></NavigationBar>

      <Routes>

        <Route path="/" element={<Login></Login>} />
        <Route path="/chat"
          element={
            <PrivateRoutes>
              <ChatRoom></ChatRoom>
            </PrivateRoutes>
          } />

      </Routes>

    </AuthProvider>
  )
}

export default App
