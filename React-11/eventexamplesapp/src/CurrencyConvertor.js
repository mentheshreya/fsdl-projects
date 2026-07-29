import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const inr = parseFloat(this.state.rupees);
    if (isNaN(inr) || inr < 0) {
      alert('Please enter a valid positive number for Indian Rupees (INR).');
      return;
    }
    // Conversion rate: 1 Euro = 90 INR
    const convertedEuros = (inr / 90).toFixed(2);
    this.setState({ euros: convertedEuros });
    alert(`${inr} INR is equal to ${convertedEuros} EUR`);
  }

  render() {
    return (
      <div className="card-panel">
        <h2 className="section-title">2. Currency Convertor (INR ➡️ EUR)</h2>
        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="rupeesInput">
              Amount in Indian Rupees (INR):
            </label>
            <input
              id="rupeesInput"
              type="number"
              className="form-input"
              value={this.state.rupees}
              onChange={this.handleChange}
              placeholder="e.g. 9000"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            💶 Convert to Euro
          </button>
        </form>

        {this.state.euros !== null && (
          <div className="result-box">
            {this.state.rupees} INR = €{this.state.euros} EUR
          </div>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
