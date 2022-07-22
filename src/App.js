import TodoFooter from "./components/todofooter";
import TodoHeader from "./components/todoheader";
import TodoMain from './components/todomain'


function App() {
  return (
    <div className="App">
      <section className="todoapp">
			<TodoHeader></TodoHeader>
			{/* <!-- This section should be hidden by default and shown when there are todos --> */}
			<TodoMain></TodoMain>
			{/* <!-- This footer should be hidden by default and shown when there are todos --> */}
			<TodoFooter></TodoFooter>
		</section>
    </div>
  );
}

export default App;
