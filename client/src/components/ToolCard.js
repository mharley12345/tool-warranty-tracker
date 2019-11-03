import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {  Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap'
const ToolCard = (props) =>{
    const[tools,setTools] = useState( [] )
    useEffect(() =>{
     axios.get('http://localhost:5000/db/all')
     .then(res => {
         let tool = res.data.tools
        let Tools =  tool.map(Tools =>{
           return Tools
        })
         setTools(Tools)})
    },[])
    

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
           <CardSubtitle>Experation Date
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