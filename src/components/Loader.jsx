import {Col,Spinner} from "react-bootstrap"
export default function Loader(){
	return (
		<Col xs={12} className="loader-wrapper mx-auto text-center">
				
			<Spinner animation="border" variant="primary"/>
		
		</Col>
	)
}
