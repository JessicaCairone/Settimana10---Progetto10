import { useState} from "react";
import Button from 'react-bootstrap/Button';
import './SearchBar.css';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [search, setSearch] = useState(''); 
    const navigate = useNavigate(); 
    const handleSearch = () => {
        navigate('/ResultsPage?cerca=' + search)
    }
    
    return (
<>
<h2 className="titolo">Controlla il meteo nella tua città</h2>
<div className="searchBar">
<input type='text' name='search' value = {search} onChange= {(e) => (setSearch(e.target.value))} className='me-3 bar' ></input>
<Button onClick={handleSearch} variant="outline-info">Cerca</Button>
</div>
</>
    )
}

export default SearchBar;