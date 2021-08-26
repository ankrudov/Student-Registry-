import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios';
import { API_URL } from '../constants';

class NewStudentForm extends Component{
    state = {
        pk:0,
        name: '',
        email: '',
        document: '',
        phone: ''
    };

    //after components finishes starting up, this function will run checking if the student props exists and sets the state with them
    componentDidMount(){
        if(this.props.students){
            const {pk, name, document, email, phone } = this.props.student;
            this.setState({pk, name, document, email, phone});
        }
    }

    //this function handles the change of states prop with the current typed values
    onChange = e => {
        this.setState({[e.target.name]: e.target.value });
    };

    //deals with the http request "post" the will run on form submit, then reset the state creates new student
    createStudent = e => {
        e.preventDefault();
        axios.post(API_URL,this.state).then(()=>{
            this.props.resetState();
            this.props.toggle();
        })
    }
    //deals with the http request "put" the will run on form submit, then reset the state edits student form
    editStudent = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(()=>{
            this.props.resetState();
            this.props.toggle();
        });
    };

    //returns current state value if fields empty
    defaulIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render(){
        return(
            <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
                <FormGroup>
                    <Label for='name'>Student Name:</Label>
                    <Input
                        type='text'
                        name='name'
                        onChange={this.onChange}
                        value={this.defaulIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Student Email:</Label>
                    <Input
                        type='email'
                        name='email'
                        onChange={this.onChange}
                        value={this.defaulIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Document#:</Label>
                    <Input
                        type='text'
                        name='document'
                        onChange={this.onChange}
                        value={this.defaulIfEmpty(this.state.document)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Phone#:</Label>
                    <Input
                        type='text'
                        name='phone'
                        onChange={this.onChange}
                        value={this.defaulIfEmpty(this.state.phone)}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default NewStudentForm;