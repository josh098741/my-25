import QrCode from 'react-qr-code'
import React,{useState} from 'react'

function QrCodeGenerator(){

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('')

    function handleGenerateQrCode(){
        setQrCode(input)
        setInput('')
    }

    return(
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input onChange={(event) => setInput(event.target.value)} type="text" name="qr-code" value={input} placeholder="Enter your value here"/>
                <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div>
                <QrCode id="qr-code-value" value={qrCode} size={400}/>
            </div>
        </div>
    );
}

export default QrCodeGenerator