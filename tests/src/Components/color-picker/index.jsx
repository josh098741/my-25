import React,{useState, useEffect} from 'react'


function ColorPicker(){

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function RandomNumberGenerator(length){
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor(){
        // #ffffff
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i = 0; i < 6; i++){
            hexColor += hex[RandomNumberGenerator(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRgbColor(){
        // rgb(22,33,44)
        const r = RandomNumberGenerator(256);
        const g = RandomNumberGenerator(256);
        const b = RandomNumberGenerator(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'hex') handleCreateRandomHexColor()
            else handleCreateRandomRgbColor()
    },[typeOfColor])

    return(
        <div  style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Generate Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
            <div style={{
                color: "white"
            }}>
                <h3>{typeOfColor === 'hex' ? 'hex color': 'rgb color'}</h3>
            </div>
        </div>
    );
}

export default ColorPicker