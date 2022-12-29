import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      data: [],
      updateN: false,
      updatedData: [],
      updatedName: '',
      updatedEmail: '',
      updatedNumber: '',
      saveB: false,
      updateIndexId: null,
      saveIndexId: null,
    };
  }

  changeHandlerName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeHandlerEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changeHandlerNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = [...this.state.data];
    data.push({
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
    });

    this.setState({
      data,
      saveB: true,
      updateN: false,
      name: '',
      email: '',
      number: '',
    });
  };

  handleUpdatedData = (e, index) => {
    console.log(e)
    console.log(this.state.data)
    e.preventDefault();

       
    
    // let savedData = this.state.data.map((elem, ind) => 
    // ind===index? e :elem.value
    // );
    // console.log(savedData);
    
    this.setState({
      //data:savedData,
      updateN: false,
      saveB: true,
      saveIndexId:index,
    });

    console.log(this.state.data)
  };

  onDelete = (e, index) => {
    e.preventDefault();
    let filteredData = this.state.data.filter((elem, ind) => {
      return ind !== index;
    });
    console.log(filteredData);

    this.setState({
      data: filteredData,
      name: '',
      email: '',
      number: '',
    });
  };

  onUpdate = (e, index) => {
    e.preventDefault();

    this.setState({
      updateIndexId: index,
      updateN: true,
      submitB: true,
      saveB: false,
      updatedName:''
    });
  };

  changeHandlerUpdatedName = (e) => {
    this.setState({
      updatedName: e.target.value,
    });
  };

  changeHandlerUpdatedEmail = (e) => {
    this.setState({
      updatedEmail: e.target.value,
    });
  };

  changeHandlerUpdatedNumber = (e) => {
    this.setState({
      updatedNumber: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={(e) => this.changeHandlerName(e)}
          />
          <br />
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={(e) => this.changeHandlerEmail(e)}
          />
          <br />
          <label>Number</label>
          <input
            type='number'
            name='number'
            value={this.state.number}
            onChange={(e) => this.changeHandlerNumber(e)}
          />
          <br />
          <button type='submit' onClick={(e) => this.handleSubmit(e)}>
            Submit
          </button>
        </form>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
          {this.state.data.map((data, index) => {
            return (
              <>
                {this.state.updateN && this.state.updateIndexId === index ? (
                  <>
                    <tr key={index}>
                      <td>
                        <input
                          type='text'
                          name='name'
                          value={this.state.updatedName}
                          onChange={(e) => this.changeHandlerUpdatedName(e)}
                        />
                      </td>

                      <td>
                        <input
                          type='text'
                          name='email'
                          value={this.state.updatedEmail}
                          onChange={(e) => this.changeHandlerUpdatedEmail(e)}
                        />
                      </td>

                      <td>
                        <input
                          type='number'
                          name='number'
                          value={this.state.updatedNumber}
                          onChange={(e) => this.changeHandlerUpdatedNumber(e)}
                        />
                      </td>
                      <td>
                        <button
                          type='submit'
                          onClick={(e) => this.handleUpdatedData(e)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    {this.state.saveB  && this.state.updateIndexId === index ? (
                      <>
                        <tr key={index}>
                          {console.log('savecondition')}
                          <td>{this.state.updatedName}</td>
                          <td>{this.state.updatedEmail}</td>
                          <td>{this.state.updatedNumber}</td>
                          <td>
                            <button onClick={(e) => this.onDelete(e, index)}>
                              Delete
                            </button>
                          </td>
                          <td>
                            <button onClick={(e) => this.onUpdate(e, index)}>
                              Update
                            </button>
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr key={index}>
                          {console.log("last")}
                          <td>{data?.name}</td>
                          <td>{data?.email}</td>
                          <td>{data?.number}</td>
                          <td>
                            <button onClick={(e) => this.onDelete(e, index)}>
                              Delete
                            </button>
                          </td>
                          <td>
                            <button onClick={(e) => this.onUpdate(e, index)}>
                              Update
                            </button>
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                )}
              </>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Form;
