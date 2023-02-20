
import { useState } from 'react'
import { MynavBar} from './Miscomponentes/index.js'
import { TextField, Box, Stack, Button } from '@mui/material'
import './App.css'
import Itemlist from './components/ItemList'
import Carrito from './components/Carrito'
import { useGlobalContext } from './context/ContextGlobal.jsx'

function TodoView() {
  const [items, setItems] =useState ([])
  const addItemForm=(e) => {
    e.preventDefault()
    
    const form = new FormData(e.target)
    const { value } = Object.fromEntries(form)
    if (value === '') return
    setItems((prev)=>[...prev, value])
    e.target.reset()

    
    

  }
  return (
    <div>
      <section>
         <MynavBar/>
      </section>
     <Box sx={{marginTop:'5rem'}}>
      <Carrito/>
      <form onSubmit={addItemForm}>
        <Stack direction='row' justifyContent='center' spacing={2}>
          <TextField 
          id="value" 
          name ="value" 
          placeholder='añade lo que quieres comprar'
          error={true}
          />
          <Button
          variant='contained'
          color='primary'
          type='sumbit'
          >añadir a la lista</Button>

        </Stack>
        
      </form>
      <Stack>
        <ul>
         {
          items.map(item=> <Itemlist key={item} item={item}/>)
         }    
        </ul>
      </Stack>
     </Box>
        
        
    
    </div>
  )
}

export default TodoView
