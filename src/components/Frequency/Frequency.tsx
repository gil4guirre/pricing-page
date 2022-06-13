import { useState } from "react"

export default function Frequency() {
    const [annual, setAnnual] = useState(false)
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