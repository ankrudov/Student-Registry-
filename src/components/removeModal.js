import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from 'axios';

import {API_URL} from '../constants';

class ConfirmRemovalModal extends Component{
    state = {
        modal: false
    };
    toggle = ()=>{
        this.setState(previous =>({
            modal: !previous.modal
        }));
    };

    deleteStudent = pk =>{
        axios.delete(API_URL + pk).then(()=>{
            this.props.resetState();
            this.toggle();
        })
    }
    render(){
        return(
            <Fragment>
                <Button color='danger' onClick={()=>this.toggle()}>Remove</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader toggle={this.toggle}>
                        Are you sure you want to delete this student?
                    </ModalHeader>
                    <ModalFooter>
                        <Button type='button' onClick={()=> this.toggle()}>Cancel</Button>
                        <Button type='button' color='success' onClick={()=> this.deleteStudent(this.props.pk)}>Delete</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default ConfirmRemovalModal;