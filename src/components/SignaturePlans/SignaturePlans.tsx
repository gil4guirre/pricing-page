import { useEffect, useState } from "react";
import PlanCard from "./PlanCard/PlanCard";
import style from "./style.module.scss";

export default function SignaturePlans({annually}: {annually: boolean}) {
    const importedDiscount = 12*((100 - 15)/100)
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
            features: ["Feature 1 Plus", "Feature 2 plus", "Awesome Feature 1", "Awesome Feature 2"],
            price: 10,
            bestPlan: false
        },
        {
            name: "Super Awesome",
            features: ["Feature 1 & 2 Plus", "Awesome Feature 1 & 2 plus", "Super Awesome Feature 1", "Super Awesome Feature 2"],
            price: 20,
            bestPlan: true
        },
        {
            name: "Extra Super Awesome",
            features: ["Feature 1 & 2 Plus", "Awesome Feature 1 & 2 plus", "Super Awesome Feature 1 & 2 plus", "Extra Super Awesome Feature"],
            price: 40,
            bestPlan: false
        }
    ]
    useEffect(() => annually ? setDiscount(importedDiscount) : setDiscount(1), [annually, importedDiscount])
    
    return (
        <div className={style.SignaturePlans}>
            {signaturePlans.map((item, index) =>
                <PlanCard key={index} {...item} discount={discount}/>
            )}
        </div>
    ) 
}