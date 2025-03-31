export default function Button({children, className, onClick}) {
    return (
        <button className={`${className}`} onClick={onClick}>
            <p>{children}</p>
        </button>
    )
}