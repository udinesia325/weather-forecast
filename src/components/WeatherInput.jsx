
import {Row,Col,Form,InputGroup} from "react-bootstrap"


export default function WeatherInput({handleChange,suhu}){
	return (
		<Row>
			<Col xs={12} sm={12} md={12} lg={12} xl={12} className="weather-wrapper text-center">
				<Col sm={8} md={5}className="mx-auto mt-4">
					<Form>
						<InputGroup>
							<InputGroup.Prepend>

	<select className=" px-3 border bg-white font-weight-bold"  onChange={suhu} defaultValue="C">			<option value="C">C</option>
		<option value="F">F</option>
	 </select>
							</InputGroup.Prepend>
							<Form.Control type="text" placeholder="Search a region ..." onChange={handleChange}/>
							
					</InputGroup>
				</Form>
				</Col>

			</Col>
 
		</Row>

	)
}
