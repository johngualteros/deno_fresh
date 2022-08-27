/** @jsx h */
import {h} from 'preact'
import {useState} from 'preact/hooks'

export default function SayHello() {

    const [message, setMessage] = useState('Hello World')
  return (
    <div>
        <h1>{message}</h1>

        <button onClick={()=>setMessage('Welcome')}>
            Click me
        </button>
    </div>
  )
}
