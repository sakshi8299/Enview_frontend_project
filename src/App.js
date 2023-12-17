
import './App.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 
import React, { useEffect, useState } from "react";
import drivers from './Data';
import { DateRangePicker } from 'react-date-range';
import Card from './components/Card';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _data = drivers;
        setData(_data);
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchData();
  }, []);

  const [query, setQuery] = useState("");
  const search_parameters = Object.keys(Object.assign({}, ...drivers));

  const mpai = {
    0 : "01",
    1 : "02",
    2 : "03",
    3 : "04",
    4 : "05",
    5 : "06",
    6 : "07",
    7 : "08",
    8 : "09",
    9 : "10",
    10 : "11",
    11 : "12"
  }

  function search(drivers) {

    return drivers.filter((driver) =>

      search_parameters.some((parameter) =>
        driver[parameter].includes(query)
      )
    );
  }

  const [displayC , setDisplayC] = useState('none');

  const [sDate , setSDate] = useState(new Date());
  const [eDate , setEDate] = useState(new Date());
  const selectionRange = {
      startDate: sDate,
      endDate: eDate,
      key: 'selection',
  }

  /* Date */


  return (
    <div className='body'>
    <div className='header_container'>
        <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        placeholder="Search Driver"
        onChange={(e) => setQuery(e.target.value)}
        /> 
        <select onChange={(e) => setQuery(e.target.value)} >
            <option>Select number plate</option>
            {
                drivers.map((item) => {
                    return (
                        <option value={item.vehicle_friendly_name} key={item.vehicle_friendly_name}>{item.vehicle_friendly_name}</option>
                    );
                })
            }
        </select>
        <div style={{ display:'flex' , flexDirection : 'column' ,  }}>
            <input onClick={() => {setDisplayC(displayC === 'none' ? 'block' : 'none')}} placeholder='Select date range'  />
            <div style={{display : displayC , position :'absolute' , top : '100px'}}>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={(range) => {
                        setSDate(range.selection.startDate);
                        setEDate(range.selection.endDate);
    
                        let q = String(sDate.getFullYear()) + "-" + mpai[sDate.getMonth()];
                        setQuery(q);
                    }}
                />
            </div>
        </div>
    </div>
    <div>
        <div style={{ fontSize : '1.5rem' , fontWeight : 'bolder', display : 'flex' , alignItems:'center' , justifyContent : 'space-between' , padding : '0.8rem 0.7rem' , backgroundColor : 'white' , margin:'5px 0px' , borderRadius : '2px'}}>
            Alert
        </div>
        <div>
            {search(drivers).map((item , i) => {
                return (
                    <Card key={i} item={item} />
                )
            })}
        </div>
    </div>
</div>
  );
}

export default App;