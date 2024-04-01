import AddTasks from "./components/AddTasks" 
import TaskList from "./components/TaskList" 

function App() {

  return (
    <>
      <div className="lg:ml-[500px]">
        <h1 className="mt-20 mb-5  mb text-4xl  font-bold">Add Your List Here</h1>
        <AddTasks></AddTasks>
        <TaskList></TaskList>
      </div>

    </>
  )
}

export default App
