import { useState } from 'react'
import Table from '../components/Table'
import ItemInputForm from '../components/ItemInputForm'

function Home({ user, updateItems, items, filteredItems, setItems }) {
  const [errors, setErrors] = useState()
  const totalQuantity = user.user_items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      {filteredItems && (
        <div>
          <h1>Total Items = {totalQuantity}</h1>
          {filteredItems.length > 0 ? <Table data={filteredItems} items={items} setItems={setItems} /> : null}
          <ItemInputForm updateItems={updateItems} items={items} errors={errors} setErrors={setErrors} />
          {errors?
            <div className='mr-3'>
              <p className='font-bold'>Required</p>
              {errors.errors.map((error, index) => (
                <ul key={index}>
                  <li className='text-red-500'>{error}</li>
                </ul>
              ))}
            </div> : null
          } 
        </div>
      )}
    </div>
  )
}

export default Home