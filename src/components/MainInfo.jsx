import {Col} from "react-bootstrap"


export default function MainInfo({location,current}){
	const {temperature,skytext} = current
	const {name,degreetype} = location

	return(
		<>
			<Col sm={12} md={5} className="maininfo mx-auto">
				<i className="fas fa-thermometer-half fa-2x"></i>
				<h1 className="d-inline suhu">{temperature}°{degreetype}</h1>
			</Col>
			<Col sm={12} md={5} className="mx-auto">
		
				<i className="fas fa-map-marker-alt mr-2"></i>
				<h5 className="d-inline">{name}</h5>
				<p>{skytext}</p>
			</Col>		
		
		</>
	)
}
