import { Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import baseUrl from '../Api'

const Cd = () => {

    const navigate = useNavigate()


    const handleClick = (id) => {
      console.log(id)
      navigate(`/enroll/${id}`)
  
    }
  
    const [viewData, setViewData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/view1/${id}`).then(response => {
            setViewData(response.data)
            console.log(response.data)
        })
    }, [])
  return (
    <div>
        <Typography variant="h6" component="div">
                                {viewData.Ctitle}
                        
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Category: {viewData.Category}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Category: {viewData.Description}
                            </Typography>
            
            
        <Button variant='contained'onClick={() => handleClick(viewData._id)} >Start Course</Button>
    </div>
  )
}

export default Cd