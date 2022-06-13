import { useState } from "react"

interface Props {
    annual: boolean
    setAnnual: (annual: boolean) => void
}

export default function Frequency({ annual, setAnnual}: Props) {
    return (
        <div>
            <form>
                <label htmlFor="freq">Monthly</label>
                <input 
                    type="checkbox" 
                    name="freq" 
                    id="freq" 
                    checked={annual}
                    onChange={event => setAnnual(!annual)}
                />
                <label htmlFor="freq">Annual</label>
            </form>
        <div>{annual? `marcado` : `desmarcado`}</div>
        </div>
    ) 
}