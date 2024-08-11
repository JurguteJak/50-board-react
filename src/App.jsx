import { Boardtables } from "./components/tables";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="board">
      <h1>Score Board</h1>
      <Boardtables />
      <h3>History:</h3>
    </main>
  )
}

export default App;
