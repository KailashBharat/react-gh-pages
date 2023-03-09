import { useState, useEffect } from 'react'

function TodoItem() {
  return (
    <div>
      <h1>TODO</h1>
    </div>
  )
}

function FancyBorder(props: { children: any }) {
  return (
    <div style={{ border: " 1px solid red" }}>
      {props.children}
    </div>
  )
}

export default function HelloWorld() {

  const [name, setName] = useState("Kailash")
  const [counter, setCounter] = useState(0)
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  const listItem = arr.map((val, index) => <li key={index}>{val}</li>)

  useEffect(() => { setCounter(counter + 1) }, [name])


  return (
    <div>
      <div>Hello {name}</div>
      <div>Name changed {counter} times</div>
      <input id="name" onChange={(e) => setName(e.target.value)} />
      <ul>
        {listItem}
      </ul>
      <FancyBorder>
        <TodoItem />
      </FancyBorder>

    </div>
  )
}

