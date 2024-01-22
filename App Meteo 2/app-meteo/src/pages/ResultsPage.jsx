import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';


const ResultsPage = () => {

    const [search, setSearch] = useState('');
    const [cities, setCities] = useState([]) ;
    const location = useLocation();
    const searchTerms = new URLSearchParams(location.search).get('cerca');

    const getCities = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerms}&appid=bac2106e5482387dba84ee5d617c21ec`;
        const res = await fetch(url);
        const data = await res.json();
        setCities(data);    
       
    }

    useEffect(() => {
        if (searchTerms?.length > 2)
            setSearch(searchTerms)
    }, [])

    useEffect(() => {
        if (search?.length > 2)
        getCities()
    }, [search])

   

    return (
    <div className="d-flex justify-content-center">
     
        {cities && (
         <Link to={`/CityWeather/${searchTerms}`} style={{textDecoration:'none', marginTop:'10%'}}>
         <Card style={{ width: '13rem', height:'18rem'}} className="border-primary">
               <Card.Img variant="top" src="../src/assets/meteo.png" />
               <Card.Body>
                 <Card.Title>{cities.name}</Card.Title>
                 {/* <Card.Text>{cities.coord.lat}</Card.Text>
                 <Card.Text>{cities.coord.long}</Card.Text> */}
               </Card.Body>
             </Card>
             </Link>
        )
        }
        
    
        </div>

    )
}

export default ResultsPage;
