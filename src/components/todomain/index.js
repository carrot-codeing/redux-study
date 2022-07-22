export default function TodoMain(){
    return(
        <section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox"/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{/* <!-- These are here just to show the structure of the list items -->
					<!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
					<li className="completed">
						<div className="view">
							<input className="toggle" type="checkbox" checked onChange={()=>{}}/>
							<label>Taste JavaScript</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Create a TodoMVC template" onChange={()=>{}}/>
					</li>
					<li>
						<div className="view">
							<input className="toggle" type="checkbox"/>
							<label>Buy a unicorn</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Rule the web" onChange={()=>{}}/>
					</li>
				</ul>
			</section>
    )
}