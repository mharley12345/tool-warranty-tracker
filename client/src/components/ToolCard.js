import React,{useState,useEffect} from 'react'
import axios from 'axios'


import {  Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap'
const ToolCard = (props) =>{
 
    const[tools,setTools] = useState( [] )
    console.log(tools)
    useEffect(() =>{
     axios.get('http://localhost:5000/db/all')
     .then(res => {
         console.log(res.data)
         let tool = res.data.tools
        setTools(tool)
        })
         
    },[])
    console.log(tools)

    return(
        // data keys in DB ('t.id','t.name', 't.quanity', 't.expires', 't.expected','t.notes')
        
       <div className='Tools'>
      
           {tools.map(id =>{
               return (
             <Card> 
            <>
            <CardBody>
          
           <CardTitle>{id.name}</CardTitle><br/>
           <CardSubtitle>ID
               <CardText>{id.id}</CardText>
            </CardSubtitle>
           <CardSubtitle>Quanity
          <CardText> {id.quanity}</CardText></CardSubtitle>
           <CardSubtitle id="exp">Experation Date
           <CardText>{id.expires}</CardText></CardSubtitle>
           <CardSubtitle>Expected Failure Date:
           <CardText>{id.expected}</CardText></CardSubtitle>
           <CardSubtitle>Notes
           <CardText>{id.notes}</CardText> </CardSubtitle>
         
           </CardBody>
           </></Card>
            ) })}
        
           
           
       </div>
       

    )
}
export default ToolCard