import { useState } from 'react'
import './AddCandy.css'
import Card from './Card'
import Candyimg from './candyimg'

const NewCandyInput = ({}) => {
    const [inputQnt, setinputQnt] = useState('')
    const [Qnt, setQnt] = useState('')

    const [inputdata, setinputdata] = useState('')
    const [data, setData] = useState([])

    function handleAddCandy(){
        
        const newData = {
            name: inputdata,
            qnt: inputQnt,
            time: new Date().toLocaleTimeString("pt-BR",{
                hour: "2-digit",
                minute: "2-digit", 
                second: "2-digit"
            })
        }
        setData(prevData=>[...prevData, newData])
        setQnt(prevQnt=>[...prevQnt, Qnt])
    }


    return (
    <>
        <select 
            onChange={e => setinputdata(e.target.value)}
            value={inputdata}
            required
            placeholder='Choose a cake'
            id='candyRequest'
            
        >
            <option value="Choose a cake" >Choose a cake</option>
            <optgroup label='Cake'>
                <option value="Strawberry cake">Strawberry cake</option>
                <option value="Chocolate cake">Chocolate cake</option>
                <option value="Wedding cake">Wedding cake</option>
                <option value="Lemon cake">Lemon cake</option>
            </optgroup>
                <optgroup label='Candy'>
            </optgroup>
            {/* <optgroup  label='Strawberry cake'>
                <option value="Strawberry">Strawberry</option>
                <option value="Strawberry Syrup">Strawberry Syrup</option>
                <option value="Chantilly">Chantilly</option>
            </optgroup>
            <optgroup label='Strawberry cake'>
                <option value="frosting">frosting</option>
                <option value="Milk Syrup">Milk Syrup</option>
                <option value="Chantilly">Chantilly</option>
            </optgroup> */}
        </select>
        {/* <input
            type="text"
            id='Produto'
            onChange={e => setinputdata(e.target.value)}
            value={inputdata}
            required
            placeholder='Choose a cake' 
        /> */}
        <input
            type="number"
            id="Qnt"
            onChange={e => setinputQnt(e.target.value)}
            required
            placeholder='How many you want?'
            max={200}
        />
        <button className='Plus'>+</button>
        <button className='Minus'>-</button>
        <input className='Add-buttom' type="submit" value="Add to Cart" onClick={handleAddCandy}/>
    {
        data.map(uniquedata=>
        <Card key={uniquedata.time} time={uniquedata.time} name={uniquedata.name} qnt={uniquedata.qnt}/>)
    }
    {
        data.map(uniquedata=>
        <Candyimg name={uniquedata.name} qnt={uniquedata.qnt}/>)
    }
    </>
    );
}
 
export default NewCandyInput;