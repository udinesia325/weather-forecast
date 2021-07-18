import {useState,useEffect} from "react"
import WeatherInput from "./WeatherInput.jsx"
import Loader from "./Loader.jsx"
import Data from "./Data.jsx"
export default function Weather(){
	const [url,setUrl] = useState("")
	const [loading,setLoading] = useState(false)
	const [data,setData] = useState("")
	const [lokasi,setLokasi] = useState("")
	const [suhu,setSuhu] = useState("C")

	const handleChange = (e)=>{
		setLokasi(e.target.value)
		
	}
	const handleSuhu = (e)=>{	
		setSuhu(e.target.value)	
	
	}
	const fetchData = async (url)=>{
		try{
		const response = await fetch(url)
		const result = await response.json()
		setData(result)
		setLoading(false)
		}catch (e){
		setLoading(false)
		console.log(e.message)
		}
	}
	useEffect(()=>{
		if(lokasi !== ""){
		setLoading(true)
			setUrl(`https://cuaca-api.herokuapp.com/${lokasi}/${suhu}`)
		}else{
		setLoading(false)
		}
	


	},[lokasi,suhu])
	useEffect(()=>{
		fetchData(url)
	},[url])


	return(	
		<>	
			
		<WeatherInput handleChange={handleChange} suhu={handleSuhu}/>
		{loading&&<Loader />}
		{data.length !== 0&&lokasi!==""?<Data data={data}/>:null}	
	</>
	

	)
}
