import {Row,Col,Accordion,Image,Card} from "react-bootstrap"
import MainInfo from "./MainInfo.jsx"
import {useState} from "react"

function Acc({location,current}){
	const [chevron,setChevron] = useState(true)

	const handleClick = () => {
		setChevron( c => !c)
	}
	return (
<Accordion defaultActiveKey="1">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" onClick={handleClick}>
	    <h5 className="text-center">Show details</h5>
	    <p className="text-center"> <i className={chevron?"fas fa-chevron-down":"fas fa-chevron-up"}></i></p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
	    <Card.Body>
		    timezone : GMT {location.timezone}
		    <hr />
		    longitude : {location.long}
		    <hr />                		    
		    latitude : {location.lat}
		    <hr />
		    humidity : {current.humidity}
		    <hr />
		    wind speed : {current.windspeed}
		    <hr />
		    wind direction: {current.winddisplay}
	    </Card.Body>
    </Accordion.Collapse>
  </Card >
</Accordion>	
	)
}


export default function Data({data}){
	const {location,current,forecast} = data
	return(
		<Row className="mt-5">
			<Col xs={4} sm={4} md={5} className="mx-auto">
				<Image src={current.imageUrl} thumbnail style={{border:"none"}}/>

			</Col>
			<Col xs={8} sm={5} md={6} className="mx-auto">
			
				<MainInfo location={location} current={current}/>

			</Col>
			<Col xs={10} sm={10} md={6} lg={5} className="mx-auto">
				<Acc 	 location={location} current={current}/>
			</Col>
			<Col xs={12}>
			</Col>
			{	
			forecast.map(f=>(
				<Col xs={4} sm={4} md={2}  className=" mb-3 forecast mt-5 mx-auto text-center">
				<Card>
					<Card.Body>
						<p>{f.skytextday}</p>
						<p>{f.date}</p>
						<p>{f.day}</p>	
						<p>{f.low}-{f.high}°{location.degreetype}</p>	
						
					</Card.Body>
				</Card>
				</Col>

					))
				
	
			}
		</Row>
	)
}
