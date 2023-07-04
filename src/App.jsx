import Header from "./components/Header/Header"
import Calendar from "./components/calendar/Calendar"
import EnrollementListProvider from "./providers/EnrollementListProvider"

function App() {

  return (
    <>
    <EnrollementListProvider>
    <Header/>
    <Calendar/>
    </EnrollementListProvider>

    </>
  )
}

export default App
