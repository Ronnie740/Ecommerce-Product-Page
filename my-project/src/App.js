// import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="flex mx-20">
				{/* logo */}
				<div>
					<h1 className="text-4xl font-bold m-2">Sneakers</h1>
				</div>
				{/*Desktop Menu */}
				<div>
					<ul className="list-none inline-flex text-xl text-slate-500">
						<li className="cursor-pointer m-4">Collections</li>
						<li className="cursor-pointer m-4">Men</li>
						<li className="cursor-pointer m-4">Women</li>
						<li className="cursor-pointer m-4">About</li>
						<li className="cursor-pointer m-4">Contact</li>
					</ul>
				</div>
				{/* Cart */}
				<div></div>
				{/* profile */}
				<div></div>
			</div>
		</div>
	);
}

export default App;
