export default function PlanCard({ name, features, price, discount}: {name: string, features: string[], price: number, discount: number} ) {
    return (
        <div>
            <h3>{name}</h3>
            {features.map((item: string, index) => (<li key={index}>{item}</li>))}
            <p>$ {price*discount}</p>
        </div>
    ) 
}