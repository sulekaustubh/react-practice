import Counter from './components/Counter';
import ShowHide from './components/ShowHide';
import ArrayMapping from './components/ArrayMapping';
import Calculator from './components/Calculator';
import DisableButton from './components/DisableButton'
import AddTask from './components/AddTask'
import FetchAPI from './components/FetchAPI'
import { Form } from './components/Form'

function App() {
	return (
		<div className="bg-gray-900 tracking-wider flex place-content-center place-items-center text-4xl text-white h-screen">
			<div className="">
				{/* <Counter /> */}
				{/* <ShowHide /> */}
				{/* <ArrayMapping /> */}
				{/* <Calculator /> */}
				{/* <DisableButton /> */}
				{/* <AddTask /> */}
				{/* <FetchAPI /> */}
				<Form />
			</div>
		</div>
	);
}

export default App;
