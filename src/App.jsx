import AddTasks from "./components/AddTasks" 
import TaskList from "./components/TaskList" 

function App() {

  return (
    <>
      <div className="md:ml-[200px] lg:ml-[500px] ">
        <h1 className="mt-20 mb-5 ml-2 mb text-3xl md:text-4xl lg:text-4xl  font-bold">Add Your Tasks Here</h1>
        <AddTasks></AddTasks>
        <TaskList></TaskList>
      </div>

    </>
  )
}

export default App
