
import MainComponent from '../src/components/MainComponent'


export default function Home() {
	/**
	 * This is the entry point of Home page 
	 */

	console.log(process.env.URL + " enviroment ....")
	
	return (
		<div>
			<MainComponent/>
		</div>
	);
}
