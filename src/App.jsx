import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('No items yet. Add your first one!')
  const [items, setItems] = useState([])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleAddItem = () => {
    const trimmedInput = input.trim()

    if (trimmedInput === '') {
      setMessage('Error: Please enter a item')
      return
    }

    setItems((prevItems) => [...prevItems, trimmedInput])
    setInput('')
    setMessage('No items yet. Add your first one!')
  }

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, idx) => idx !== index)
    setItems(updatedItems)

    if (updatedItems.length === 0) {
      setMessage('No items yet. Add your first one!')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddItem()
  }

  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="card-title">Add Items to List</h2>

        <form className="input-row" onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            value={input}
            onChange={handleChange}
            placeholder="Type something and press Enter"
            className="item-input"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>

        {items.length === 0 ? (
          <p className="empty-message" id="result">
            {message}
          </p>
        ) : (
          <ul className="items-list">
            {items.map((item, index) => (
              <li key={`${item}-${index}`} className="item-row">
                <span>{item}</span>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleDelete(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
