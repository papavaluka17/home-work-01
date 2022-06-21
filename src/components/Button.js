import Send from "../images/send.png"


export default function Button({text, customClass}) {
    return (
        <button className={customClass}>
            {text}
            <img src={Send} alt="send"/>
        </button>
    )
}