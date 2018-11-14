import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"

class Filters extends Component {

    renderField(field){
        return <div className="form-group">
          <input className="form-control" {...field.input} type="text"/>
          {field.meta.touched && field.meta.error &&
           <span className="has-danger">{field.meta.error}</span>}
        </div>
    }

    renderRange(field){
        console.log(field)
        return <div className="form-group">
            <input type="range" className="form-control slider" {...field} {...field.input} />
            <br/>
            <span>Value: {field.input.value}</span>
        </div>
    }

    render() {
        return <form className="form" action="">
            <Field name="processor" component={this.renderField}/>
            <Field name="range" min="0" max="10" value="0" component={this.renderRange}/>
        </form>
    }
}

function validate(values){
    var errs = {}
    if(!values.processor) {
        errs.processor = "Required"
    }
    return errs
}

export default reduxForm({
    form:"laptopFilters",
    validate
})(Filters);