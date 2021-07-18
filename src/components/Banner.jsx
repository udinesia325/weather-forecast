import {Row,Col,Image} from "react-bootstrap"
export default function Banner(){
	const handleClick = event =>{
		event.target.parentElement.parentElement.parentElement.style.marginTop ="-150vh"
		setTimeout(()=>{
		event.target.parentElement.parentElement.parentElement.remove()	

		},500)
		document.body.style.overflowY = "auto"

	}

	return (<div className="home-wrapper fixed-top">
        <Row>
    	    <Col xs={6} sm={6} md={6} lg={4} xl={4} className="text-center mx-auto">
    		    <h1>Weather-Forecast</h1>
    		    <p>find out the latest weather forecast!</p>
    		    <button onClick={handleClick} className="btn py-1 px-4 text-light font-weight-bold">GO</button>
    	    </Col>
	    <Col xs={6} sm={6} md={6} lg={4} xl={4}className=" mx-auto pr-5">		 
		    <Image src="banner.png" thumbnail className="mx-auto" style={{border:"none"}}/>
    	    </Col>                                              
    </Row>
   
</div>
)
}
