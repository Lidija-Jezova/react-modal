import { useState } from 'react';
import Modal from './components/Modal'
import './css/App.css'

function App() {
	const [isTextModalActive, setIsTextModalActive] = useState(false)
	const [isFormModalActive, setIsFormModalActive] = useState(false)

	const handleTextModal = () => {
		setIsTextModalActive(!isTextModalActive)
	}

	const handleFormModal = () => {
		setIsFormModalActive(!isFormModalActive)
	}

	return (
		<div className="App">
			<div className="buttons">
				<button
					className='openModal'
					onClick={handleTextModal}
				>
					&#128196; open modal
				</button>
				<button
					className='openModal'
					onClick={handleFormModal}
				>
					&#9997; open modal
				</button>
			</div>

			<Modal
				title="This is text modal window"
				isModalActive={isTextModalActive}
				handleModal={handleTextModal}
			>
				<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
				<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
				<p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
				<p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me? " he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
			</Modal>


			<Modal
				title="This is form modal window"
				isModalActive={isFormModalActive}
				handleModal={handleFormModal}
			>
				<form
					action="#"
					className='form'
				>
					<label>
						First name
						<input type="text" name="firstName" />
					</label>
					<label>
						Last name
						<input type="text" name="lastName" />
					</label>
					<label>
						Email
						<input type="email" name="email" />
					</label>
					<input className='submit' type="submit" value="Submit" />
				</form>
			</Modal>

		</div>
	);
}

export default App;
