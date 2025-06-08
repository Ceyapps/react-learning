import { navItems } from "../../utils/data";



const Navigation = () => {
    return (
        <nav>
                <ul className="mainNav">
                    { navItems.map( item=>(
                    <li className="navItem" key={item.id}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
                </ul>
            </nav>
    )
}

export default Navigation;