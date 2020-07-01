import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

import { postEvent } from "../actions";

class EventsNew extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderFeild(field) {
        const { input, label, type, meta: { touched, error } } = field

        return (
            <TextField
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={touched || error}
                {...input}
                fullWidth={true}
            />
        )
    }

    async onSubmit(values) {
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit, pristine, submitting, invalied } = this.props
        const style = { margin: 12 }

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="Title" name="title" type="text" component={this.renderFeild} /></div>
                <div><Field label="Body" name="body" type="text" component={this.renderFeild} /></div>

                <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalied} />
                <RaisedButton label="Cancel" type="submit" containerElement={<Link to="/" />} />
            </form >
        )
    }
}

const validate = values => {
    const errors = {}

    if (!values.title) errors.title = "Enter a name."
    if (!values.body) errors.body = "Enter a body."

    return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
