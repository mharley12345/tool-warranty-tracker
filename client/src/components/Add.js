import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Add.scss'
import axios from 'axios'
class Add extends Component{
   constructor(props){
       super(props);
       this.state = {value:''};
  
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }
     handleChange = (event)=>{
         console.log(event)
        this.setState({value: event.target.value})
     }
     handleSubmit = (event)=>{
           
        axios.post('http://localhost:5000/db/addtool',event =>{
        event.preventDefault()
        .then(res =>{console.log(res)})
        alert('Form submitted: ' + this.state.value)
    
    })}
     render() {
  return (
    <Form className='form' onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label><br/>
        <Input type="text" name="name" id="name"  onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="quanity">Quanity</Label><br/>
        <Input type="number" name="quanity" id="quanity" onChange={this.handleChange}  />
      </FormGroup>
      {/* 't.id','t.name', 't.quanity', 't.expires', 't.expected','t.note */}
      <FormGroup id="dates">    
        <Label for="expires">Experation Date</Label><br/>
        <Input type="date" name="expires" id="expires" onChange={this.handleChange}/>
       </FormGroup>
       <FormGroup id="dates">
        <br/><Label for="expected">Expected Fail Date</Label><br/>
        <Input type="date" name="expected" id="expected" onChange={this.handleChange}/>
     
      </FormGroup>
   
      <FormGroup>
      
        <Label for="notes">Notes</Label><br/>
        <Input type="textarea" name="notes" id="notes" onChange={this.handleChange} />
      </FormGroup>
   
      <Button type="submit" value="Submit" >Submit</Button>
    </Form>
  );
}}

export default Add;