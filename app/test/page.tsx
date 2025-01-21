export const metadata = {
	title: 'Test',
}

export default function Games() {
	return (
		<form action="#" className="flex space-x-3 justify-center">
			<input data-hover-target type="color" name="Color" id="color" />
			<input data-hover-target type="submit" value="Submit" className="bg-gray-500 p-1 rounded-md hover:bg-gray-700" />
		</form>
	)
}