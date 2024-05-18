
import Login from '../ContextAPI/Login'
import Profile from '../ContextAPI/Profile'
import UserContextProvider from '../ContextAPI/UserContextProvider'

function ContextApp() {
  

  return (
    <UserContextProvider>
      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            Context API Basic Setup
        </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default ContextApp
