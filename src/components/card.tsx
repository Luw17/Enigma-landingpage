import './card.css';

interface CardProps {
  titulo: string;
  descricao: string;
  variant?: 'card1' | 'card2';
}

export default function Card({ titulo, descricao, variant = 'card1' }: CardProps) {
  return (
    <div className={`card ${variant}`}>
      <div className="card-content">
        <p className="cardTitulo"> <strong></strong>{titulo}</p>
        <p className="cardDescricao">{descricao}</p>
      </div>
    </div>
  );
}
