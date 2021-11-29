import React from "react";

var placa;
class Botao extends React.Component {
     state = {
          disabled: true,
          valor: '',
          displayUm: 'flex',
          displayDois: 'none',
          displayLoading: 'none',
          displayTres:'none'
     }

     handleChange = (e) => {
          if (e.target.value.length == 8) {
               placa = e.target.value
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
                 displayUm:'none',
              displayDois: 'flex'
            })
           
      
          }
          console.log('teste')
        }
        telaLoading = () => {
          this.setState({
               displayDois:'none',
               displayLoading:'flex',
          })
          setTimeout(() => {
               this.setState({
                    displayUm:'flex',
                    displayDois:'none',
                    displayLoading:'none'
               })
          }, 1000);
        }
        telaLoadingSair = () => {
          this.setState({
               displayTres:'none',
               displayLoading:'flex',
          })
          setTimeout(() => {
               this.setState({
                    displayUm:'flex',
                    displayLoading:'none'
               })
          }, 1000);
        }
        sairTelaLoading = () => {
             this.setState({
                  displayUm:'flex',
                  displayDois:'none',
                  displayTres:'none'
             })
        }
        telaSair = () => {
          this.setState({
               displayUm:'none',
            displayTres: 'flex'
          })
        }
     render() {

          return (
               <div>
                    <div className="teste" style={{ display: this.state.displayUm }}>
                         <input className="inputUm" type='text' placeholder="AAA-0000" onChange={this.handleChange}></input>
                         <button className="pagamento" onClick={this.alteraEstado} disabled={this.state.disabled}>Pagamento</button>
                         <button className="saida" onClick={this.telaSair} disabled={this.state.disabled}>Saida</button>
                    </div>
                    <div className="confirmar" style={{ display: this.state.displayDois }}>
                         <p>Confirmar o pagamento da placa abaixo?</p>
                         <h2>{placa}</h2>
                         <button className="outrobutton" onClick={this.telaLoading}>confirmar</button>
                         <a onClick={this.sairTelaLoading}>voltar</a>
                    </div>
                    <div className="confirmar" style={{ display: this.state.displayTres }}>
                         <p>Confirmar a saida da placa abaixo?</p>
                         <h2>{placa}</h2>
                         <button className="outrobutton" onClick={this.telaLoadingSair}>confirmar</button>
                         <a onClick={this.sairTelaLoading}>voltar</a>
                    </div>
                    <div className="loading" style={{ display: this.state.displayLoading }}></div>

               </div>
          )
     }
}

export default Botao;