import style from './Header.module.scss';

export default function Header() {
    return (
        <div className={style.Header}>
            <h1>Pricing</h1>
            <h2>Try it for free</h2>
        </div>
    )
}