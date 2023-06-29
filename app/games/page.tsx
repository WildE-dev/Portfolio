import BarnyardBonanza from "./barnyardbonanza"
import DiggingGame from "./digginggame"
import JumpinJimmy from "./jumpinjimmy"
import PieceMakers from "./piecemakers"

export const metadata = {
	title: 'Games',
}

export default function Games() {
	return (
		<div>
			<DiggingGame/>
			<JumpinJimmy/>
			<BarnyardBonanza/>
			<PieceMakers/>
		</div>
	)
}