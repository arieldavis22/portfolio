import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react'

class Contact extends Component {
    state = {
        fullName: '',
        email: '',
        message: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    sendFeedback = (templateId, vars) => {
        window.emailjs.send(
            'gmail', templateId,
            vars
            ).then(res => {
                console.log('Email successfully sent!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    handleSubmit = event => {
        const templateId = 'template_Gwj9uOap'

        this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.fullName, reply_to: this.state.email})
    }

    render() {
        console.log(this.state)
        return (
            <div className='container'>
                Contact
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field >
                        <label>Full Name</label>
                        <input name='fullName' placeholder=' Enter Full Name' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field >
                        <label>Email</label>
                        <input name='email' placeholder='Enter Email' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field >
                        <label>Message</label>
                        <TextArea name='message' placeholder='Message' onChange={this.handleChange}/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Contact;
