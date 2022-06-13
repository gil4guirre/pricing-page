import { useEffect, useState } from "react";
import PlanCard from "./PlanCard/PlanCard"

export default function SignaturePlans({annual}: {annual: boolean}) {
    const importedDiscount = 12*((100 - 15)/100)
    const [discount, setDiscount] = useState<number>(1);
    const signaturePlans = [
        {
            name: "Free",
            features: ["Free of charge", "Feature 1", "Feature 2"],
            price: 0
        },
        {
            name: "Awesome",
            features: ["Feature 1 Plus", "Feature 2 plus", "Awesome Feature 1", "Awesome Feature 2"],
            price: 10
        },
        {
            name: "Super Awesome",
            features: ["Feature 1 & 2 Plus", "Awesome Feature 1 & 2 plus", "Super Awesome Feature 1", "Super Awesome Feature 2"],
            price: 15
        },
        {
            name: "Extra Super Awesome",
            features: ["Feature 1 & 2 Plus", "Awesome Feature 1 & 2 plus", "Super Awesome Feature 1 & 2 plus", "Extra Super Awesome Feature"],
            price: 20
        }
    ]
    useEffect(() => annual ? setDiscount(importedDiscount) : setDiscount(1))
    
    return (
        <div>
            {signaturePlans.map((item, index) =>
                <PlanCard key={index} {...item} discount={discount}/>
            )}
        </div>
    ) 
}