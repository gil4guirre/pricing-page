interface Props {
    annually: boolean
    setAnnual: (annually: boolean) => void
}

export default function Frequency({ annually, setAnnual}: Props) {
    return (
        <div>
            <form>
                <label htmlFor="freq">Monthly</label>
                <input 
                    type="checkbox" 
                    name="freq" 
                    id="freq" 
                    checked={annually}
                    onChange={event => setAnnual(!annually)}
                />
                <label htmlFor="freq">Annually</label>
            </form>
        </div>
    ) 
}