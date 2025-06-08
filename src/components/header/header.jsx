import Navigation from './nav.jsx';

const Header = () => {
    const handleChange = (event) => {
    console.log(event.target.value);
}
    return (
        <header>
            <div className="logo">Awesome News</div>
            <input onChange={handleChange}></input>

            <Navigation />
            
        </header>
    );
}

export default Header;