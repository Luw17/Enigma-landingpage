import './PricingTable.css';

export default function PricingTable() {
  return (
    <div className="pricing-table">
      <div className="plan-column starter">
        <div className="plan">
          <h4>Starter</h4>
          <p className="duration">Vitalício</p>
          <p className="price">GRÁTIS</p>
          <ul>
            <li>Criação e gerenciamento de ordens de serviço</li>
          </ul>
        </div>
      </div>

      <div className="plan-column bronze">
        <div className="plan">
          <h4>BRONZE</h4>
          <p className="duration">3 meses</p>
          <p className="price">R$ 25,00</p>
          <ul>
            <li>Criação e gerenciamento de ordens de serviço</li>
            <li>Agendamentos com clientes</li>
          </ul>
        </div>
      </div>

      <div className="plan-column silver">
        <div className="plan">
          <h4>SILVER</h4>
          <p className="duration">6 meses</p>
          <p className="price">R$ 45,00</p>
          <ul>
            <li>Tudo do plano <strong>Bronze</strong></li>
            <li>Selo de verificação na loja</li>
            <li>Customização de tema</li>
            <div className="analytics"><li>ENIWHERE ANALYTICS*</li></div>

          </ul>
        </div>
      </div>

      <div className="plan-column gold">
        <div className="plan">
          <h4>GOLD</h4>
          <p className="duration">12 meses</p>
          <p className="price">R$ 80,00</p>
          <ul>
            <li>Tudo do plano <strong>Silver</strong></li>
            <li>Loja em destaque</li>
            <li>Selo especial Gold*</li>
            <div className="analytics"><li>ENIWHERE ANALYTICS*</li>
            </div>
            <div className="enitime"><li>ENITIME*</li>
            </div>
        </ul>
      </div>
    </div>
    </div>
  );
}
