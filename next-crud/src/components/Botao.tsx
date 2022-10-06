interface BotaoProps {    
    grandiente?: 'from-blue-500 to-blue-800' | 'from-gray-500 to-gray-800' | 'from-green-500 to-green-800'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {    
    const gradiente = props.grandiente ?? 'from-blue-500 to-blue-800'
        
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${gradiente}
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}