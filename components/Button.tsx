type Props = {
    content: string
}

const Button: React.FC<Props> = ({ content }) => {

    return (
        <button
            className="
            font-bold bg-slate-200 p-2 px-4 rounded-xl drop-shadow 
            hover:shadow-lg hover:scale-105 hover:bg-slate-100 transition-all duration-300"
        >
            {content}
        </button>
    )
}

export default Button;