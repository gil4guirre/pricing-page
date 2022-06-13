import style from './style.module.scss';

export default function PlanCard({ name, features, price, discount, bestPlan}: {name: string, features: string[], price: number, discount: number, bestPlan: boolean} ) {
    return (
        <div className={`${style.PlanCard} ${bestPlan ? style.bestPlan : ''}`}>
            <h3>{name}</h3>
            <p>$ {price*discount}</p>
            {features.map((item: string, index) => (<li key={index}>{item}</li>))}
        </div>
    ) 
}