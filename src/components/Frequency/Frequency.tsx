import style from "./style.module.scss";
interface Props {
    importedDiscount: number
    annually: boolean
    setAnnual: (annually: boolean) => void
}

export default function Frequency({ importedDiscount, annually, setAnnual }: Props) {
    return (
        <div className={style.freqDiv}>
            <form>
                <label htmlFor="freq" className={style.freqLabel}>Monthly</label>
                <label className={style.switch}>
                    <input 
                        type="checkbox"
                        name="freq" 
                        id="freq" 
                        checked={annually}
                        onChange={event => setAnnual(!annually)}
                    />
                    <span className={style.slider}></span>
                </label>
                <label htmlFor="freq" className={style.freqLabel}>Annually</label>
            </form>
            <label htmlFor="freq" className={style.freqDiscount}>{importedDiscount}% discount</label>
        </div>
    ) 
}