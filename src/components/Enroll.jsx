import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Enroll = () => {

    const [viewData, setViewData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/view2/${id}`).then(response => {
            setViewData(response.data)
            console.log(response.data)
        })
    }, [])
  return (
    <div>
    <h2 align='center'>iot </h2>
    <Typography variant="h6" style={{ display: 'flex', justifyContent: 'center' }} component="div">
      
                                {viewData.notes}
                        
                            </Typography>
                            
                                   
    </div>
  )
}

export default Enroll