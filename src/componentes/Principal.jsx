import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Principal = () => {

    const [select, setSelect] = useState("");
    const [id, setId] = useState("1");
    const [error, setError] = useState(false);
    const [result, setResult] = useState({});
    const [opciones, setOpciones] = useState([]);
    

    useEffect((e) => { 
      axios.get('https://swapi.dev/api/') 
      .then(response => response.data) 
      .then(result => {
        console.log(result)
        let listaResultado = []

        for (const [key,value] of Object.entries(result)) { 
            listaResultado.push({label: key, url: value}) 
        }
            setOpciones(listaResultado);
            setSelect(listaResultado[0].url)
    })
    .catch(error=> {
        console.log(error);
        setError(true);
    })
    }, []) 

    useEffect(() => {
      console.log(select)
    }, [select])
    
    
    const handleBuscar = (e) =>{
      e.preventDefault(); 
      let url = select + id;
      axios.get(url)
      .then(response => response.data)
      .then(result => {
        setError(false);
      if(select.includes(select)){
        console.log(result)
        setResult(result);
      }
      })
      .catch(error => {
        console.log(error);
        setError(true);
      })
    }
    return (
        <div>
          <div>
            <form className='container-contenido' onSubmit={handleBuscar}>
                <p>Search For: </p><select selected ={select} onChange={(e) => setSelect(e.target.value)}  className="select">
                {
                  opciones.map ((item,index)=>
                    <option key ={item.label + index} value = {item.url}>{item.label}</option>)
                }
                </select>
                <div>
                  <label>
                    <p>id: <input type='number' value={id} onChange={(e) => setId(e.target.value)} className="input"/> </p>
                  </label>
                </div>
                <button type='submit' className='btn'>Search</button>
              </form>
          </div>
          <div>
            {
              result.name?
              <div className='result'>
                Name: {result.name}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.climate?
              <div className='result'>
                Climate: {result.climate}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.hair_color?
              <div className='result'>
                Hair Color: {result.hair_color}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.eye_color?
              <div className='result'>
                Eye Color: {result.eye_color}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.skin_color?
              <div className='result'>
                Skin Color: {result.skin_color}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.diameter?
              <div className='result'>
                Diameter: {result.diameter}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.orbital_period?
              <div className='result'>
                Orbital Period: {result.orbital_period}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.language?
              <div className='result'>
                Language: {result.language}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.average_height?
              <div className='result'>
                Average height: {result.average_height}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.classification?
              <div className='result'>
                Classification: {result.classification}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.director?
              <div className='result'>
                  Director: {result.director}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.producer?
              <div className='result'>
                  Producer: {result.producer}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.title?
              <div className='result'>
                  Title: {result.title}
              </div>:
              ''
            }
          </div>
          <div>
            {
              result.episode_id?
              <div className='result'>
                  Episode Id: {result.episode_id}
              </div>:
              ''
            }
          </div>


        </div>
    )
}

export default Principal