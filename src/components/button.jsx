export default function Button({children, primary}) {
    return (
        <button className={`${primary}`}>
            <p>{children}</p>
        </button>
    )
}