import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentForm from './studentForm';

class NewStudentModal extends Component{
    state = {
        modal:false
    };
    toggle = ()=>{
        this.setState(previous =>({
            modal: !previous.modal
        }))
    }
}