
const getTheYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}

const Header = () => (
    <div>
        Header the year is {getTheYear()}.
    </div>
)

export default Header;