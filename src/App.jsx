import pistola from './assets/collection.png'
import card from './assets/card-notslot.png'
import resizer from './assets/resize.png'
import headerLine from './assets/header-line.png'
import closeCardButton from './assets/close-icon.png'
import './App.css'

function App() {
  
  return (
    <>
      <div className="info-card">
        <div className="item-info-card main">
          <div className="item-info-card-frame">
            <div 
              className="item-info-card-head"
              style={{backgroundImage: "url(" + headerLine + ")"}}
              >
                <div className="collections-title">Collections</div>
                <img src={closeCardButton} alt="" className="close-card-button" />
              </div>
            <div className="item-info-card-content">
              <img src={pistola} alt="" className="item-image" />
              <div className="item-info-card-content-right">
                <div className="item-info-card-title"><span>Pistola Valhalla</span></div>
                <div className="item-info-card-content-attr">
                  <p>Pistola criada exclusivamente para membros iniciantes do Grupo do Éden.</p>
                  <div className="divider">-----------------</div>
                  <p className="blue">AGI +2. DES +2</p>
                  <div className="divider">-----------------</div>
                  <p>A cada 9 níveis base:</p>
                  <p className="blue">ATQ +10</p>
                  <div className="divider">-----------------</div>
                  <p>A cada 18 níveis base:</p>
                  <p className="blue">Dano de [Desperado] +3%.</p>
                  <p className="blue">Velocidade de ataque +1%.</p>
                  <div className="divider">-----------------</div>
                  <p>Classe: <span className="purple">Pistola</span></p>
                  <p>Forca de Ataque: <span className="red">15</span></p>
                  <p>Peso: <span className="green">0</span></p>
                  <p>Nível da arma: <span className="green">2</span></p>
                  <p>Nível necessário: <span className="green">20</span></p>
                  <p>Classes que utilizam: <span className="purple">Justiceiros</span></p>
                  <p>Visualizar no Database: <a href="https://www.ragnatales.com.br/db/items/17965" className="link" target="_blank">[ID: 17965]</a></p>
                </div>
              </div>
              
            </div>
            <img src={resizer} alt="" className="resizer" />
          </div>
        </div>
        <div className="item-info-card add">
          <div className="item-info-card-frame">
            <p>ATQ +26</p>
          </div>
        </div>
        <div className="item-info-card add">
          <div className="item-info-card-frame">
            <p>Dano Físico contra a raça Bruto +17%</p>
          </div>
        </div>
        <div className="item-info-card add">
          <div className="item-info-card-frame">
            <div className="cards">
              <img src={card} alt="" />
              <img src={card} alt="" />
              <img src={card} alt="" />
              <img src={card} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
