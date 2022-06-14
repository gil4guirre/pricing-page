import Button from "../../Button";
import style from "./PlanCard.module.scss";

export default function PlanCard({ name, features, price, discount, bestPlan}: {name: string, features: string[], price: number, discount: number, bestPlan: boolean} ) {
    return (
        <div className={`${style.PlanCard} ${bestPlan ? style.bestPlan : ''}`}>
            <h3>{name}</h3>
            <p>R$ {(price*discount).toLocaleString('pt-BR', {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            <div>
                {features.map((item: string, index) => (<li key={index}>{item}</li>))}
            </div>
            <Button text={price === 0 ? `Get Started` : `Try it Now`}/>
        </div>
    ) 
}