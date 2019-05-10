import React from 'react' 
import uuid from 'uuid'
import Select from 'react-select'

class TicketForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            selectedDepartmentOption: null,
            message: '', 
            selectedPriorityOption: null
        }

        this.priorityOptions = [
            { value: 'high', label: 'high' },
            { value: 'medium', label: 'medium' },
            { value: 'low', label: 'low' }
        ]

        this.departmentOptions = [
            { value: 'technical', label: 'Technical' },
            { value: 'sales', label: 'Sales' },
            { value: 'hr', label: 'Hr' }
        ]
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handlePriorityChange = (option) => {
        this.setState(() => ({ selectedPriorityOption: option}))
        //console.log(option)
    }

    handleDepartmentChange = (option) => {
        this.setState(() => ({ selectedDepartmentOption: option}))
        //console.log(option)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: uuid(), 
            name: this.state.name,
            department: this.state.selectedDepartmentOption.value,
            priority: this.state.selectedPriorityOption.value,
            message: this.state.message
        }
        this.props.handleSubmit(formData)
    }

    

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name <br />
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} className="form-control" />
                        </label>
                    </div>

                    <div className="form-group">
                            Department<br />
                            <Select 
                            value={this.state.selectedDepartmentOption}
                            options={this.departmentOptions}
                            onChange={this.handleDepartmentChange} 
                             name="department">
                                {/* <option value=""> Select </option>
                                <option value="technical"> Technical </option>
                                <option value="sales"> Sales </option>
                                <option value="hr"> Human Resource </option> */}
                            </Select>
                    </div>


                    <div className="react-select-container">
                        {/* <label> */}
                            Priority<br />
                            <Select
                                value={this.state.selectedPriorityOption}
                                options={this.priorityOptions}
                                onChange={this.handlePriorityChange}
                            />
                        {/* </label>     */}
                    </div> 
                

                    <div>
                        <label>
                            Message<br />
                            <textarea value={this.state.message} onChange={this.handleChange} name="message" className="form-control">

                            </textarea>
                        </label>
                    </div>

                    <input type="submit" value="Add Ticket" className="btn btn-primary" />

                </form>
            </div>
        )
    }
}

export default TicketForm