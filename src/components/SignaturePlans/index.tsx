import { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import style from "./SignaturePlans.module.scss";

export default function SignaturePlans({annually, importedDiscount}: {annually: boolean, importedDiscount: number}) {
    const discountMath = 12*((100 - importedDiscount)/100)
    const [discount, setDiscount] = useState<number>(1);
    const signaturePlans = [
        {
            name: "Free",
            features: ["Free of charge", "Feature 1", "Feature 2"],
            price: 0,
            bestPlan: false
        },
        {
            name: "Awesome",
            features: ["Feature 1", "Feature 2", "Awesome Feature 1", "Awesome Feature 2"],
            price: 9.99,
            bestPlan: false
        },
        {
            name: "Super",
            features: ["Feature 1 & 2", "Awesome Feature 1 & 2", "Super Feature 1", "Super Feature 2"],
            price: 19.99,
            bestPlan: true
        },
        {
            name: "Extra",
            features: ["Feature 1 & 2", "Awesome Feature 1 & 2", "Super Feature 1 & 2", "Extra Feature"],
            price: 39.99,
            bestPlan: false
        }
    ]
    useEffect(() => annually ? setDiscount(discountMath) : setDiscount(1), [annually, discountMath])
    
    return (
        <div className={style.SignaturePlans}>
            {signaturePlans.map((item, index) =>
                <PlanCard key={index} {...item} discount={discount}/>
            )}
        </div>
    ) 
}