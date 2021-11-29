import React from "react";

class Botao extends React.Component {
  state = {
    disabled: true,
    valor: '',
    displayUm: 'flex',
    displayDois: 'none',
  }

  handleChange = (e) => {
    if (e.target.value.length == 8) {
      this.setState({
        disabled: false,
        valor: e.target.value
      })
    } else {
      this.setState({
        disabled: true
      })
    }
  }

  alteraEstado = () => {
    if (this.state.displayUm == 'flex') {
      this.setState({
        displayUm: 'none',
        displayDois: 'flex'
      })
      setTimeout(() => {
        this.setState({
          displayUm:' flex',
          displayDois:'none'
        })
      }, 1000);

    }
    console.log('teste')
  }
  render() {

    return (
      <div>
        <div className="teste" style={{ display: this.state.displayUm }}>
          <input className="inputUm" type='text' placeholder="AAA-0000" onChange={this.handleChange}></input>
          <button className="entrada" onClick={this.alteraEstado} disabled={this.state.disabled}>CONFIRMAR ENTRADA</button>
        </div>
        <div className="loading" style={{ display: this.state.displayDois }}></div>
        <p style={{ display: this.state.displayDois }}>Cadastrando...</p>
      </div>
    )
  }
}

export default Botao;