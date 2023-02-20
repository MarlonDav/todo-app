import{Typography, ListItem, ListItemButton, Checkbox, Stack } from '@mui/material'
import { useState } from 'react'
import { useGlobalContext } from '../context/ContextGlobal'


const ItemList = ({item}) => {
    const [itemClick, setItemClick] = useState (false)
    const {setKeywordContext} = useGlobalContext()
     function handleClick (e){
        setItemClick(e.target.checked)
        setKeywordContext(item)
     }
     return(

  <ListItem key={item}>
          <ListItemButton 
          sx={{
            
            borderRadius: '8px'
            
          }}
          >
            <Stack direction='row' sx={{display:'flex', alignItems:'center'}}>
              <Checkbox
              color='primary'
              size='medium'
              onChange={handleClick}
              />
              <Typography 
              sx={{
                textTransform:'uppercase',
                textDecoration: itemClick && 'line-through'
                }}>
                {item}
              </Typography>
            </Stack>
          </ListItemButton>
        </ListItem>
      
     )

    }
export default ItemList
    
      
    
  
  