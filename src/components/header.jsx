

const Header = () => {
    const handleChange = (event) => {
    console.log(event.target.value);
}
    return (
        <header>
            <div 
            className="logo"
            >LOGO</div>
            <input
                onChange={handleChange}
            ></input>
        </header>
    );
}

export default Header;