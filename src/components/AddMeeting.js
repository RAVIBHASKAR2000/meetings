import React,{ Component } from 'react';
import {Breadcrumb,BreadcrumbItem, Input, Button,Form, FormGroup, Label} from 'reactstrap';
import {Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

class AddMeeting extends Component{
    constructor(props){
        super(props);
        this.state={
            starttime: '10:00',
            endtime: '11:00',
            meetingdate:null,
            description:null,
        }
        this.onChangeMeeting=this.onChangeMeeting.bind(this);
        this.onChangeStartTime=this.onChangeStartTime.bind(this);
        this.onChangeEndTime=this.onChangeEndTime.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);

    }
    onChangeMeeting = meetingdate => this.setState({ meetingdate:meetingdate});
    onChangeStartTime=time => this.setState({ starttime:time});
    onChangeEndTime=time => this.setState({endtime:time});
    onChangeDescription=description=>this.setState({description:description});

    handlesubmit(event){
       alert('Slot not available')
       event.preventDefault();
    }
    render(){
        return(
                <div className="container">
                     <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to ='/home'>Meetings</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Add Meetings</BreadcrumbItem>
                    </Breadcrumb>
               
                    
                    <Form onSubmit={this.handlesubmit}>
                            <FormGroup>
                                <Label htmlFor="meeting">Meetings</Label>
                                <DatePicker
                                value="Meetings Date?"
                                onBlur={this.onChangeMeeting}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="starttime">starttime</Label>
                                <TimePicker
                                onBlur={this.onChangeStartTime}
                            value={this.state.time} 
                                />
                            </FormGroup>
                            <FormGroup >
                            <Label htmlFor="starttime">endtime</Label>
                            <TimePicker
                                 onBlur={this.onChangeEndTime}
                                value={this.state.time} 
                            />
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="starttime">Description</Label>
                                <Input type="textarea"></Input>
                                </FormGroup>
                            <Button type="submit" value="submit" color="primary">Save</Button>
                        </Form>
            </div>
           
        );
    }

}

export default AddMeeting;