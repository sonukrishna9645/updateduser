import { Button, Card, CardContent, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseUrl from '../../Api'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Userret = (course) => {
    console.log(course)

    const [courses, setCourses] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get(baseUrl + "/view")
        .then(response => {
            console.log(response.data);
            setCourses(response.data);
        })
        .catch(err => console.log(err));
    }, []);

    // const handleStartCourse = (courseId) => {
    //     // Navigate to the course page
    //     history.push(`/course/${courseId}`);
    // };

    
    const handleStartCourse = (id) => {
        console.log(id)
        Navigate(`/cd/${id}`);
    };
     
    // const handleBookAppointment = () => {
    //     Navigate('/appointment');
    //   }
    
    
  return (
    <div >
    
        <div style={{ display: 'flex', justifyContent: 'center' }}><br/>
            <Typography style={{ marginBottom: '20px' }} variant="h5"></Typography>
            <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                {courses.map((course, index) => (
            
                    <Card  key={index} style={{ width: '300px' }}>
                        <CardContent >
                            <Typography variant="h6" component="div">
                                {course.Ctitle}
                        
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Category: {course.Category}
                            </Typography>
                            {/* <Typography variant="body2" style={{ marginTop: '10px' }}>
                                {course.Description}
                            </Typography> */}
                            
                            <center> <Button variant="contained" onClick={()=>handleStartCourse(course._id)}>VIEW DETAILS</Button></center>
                        </CardContent>
                       
                    </Card>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default Userret
