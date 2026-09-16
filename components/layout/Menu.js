import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li><Link href="#about">O Empreendimento</Link></li>
                <li><Link href="#plantas">Plantas</Link></li>
                <li><Link href="#diferenciais">Lazer</Link></li>
                <li><Link href="#condicoes">Condições</Link></li>
                <li><Link href="#localizacao">Localização</Link></li>
                <li><Link href="#interesse">Tenho Interesse</Link></li>
            </ul>
        </>
    )
}
