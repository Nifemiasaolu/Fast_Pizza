import { Link } from "react-router-dom"
import SearchOrder from "../Features/Order/SearchOrder"

function Header() {
  return (
    <header>
      <Link to="/"> Fast Pizza Co.</Link>

      <SearchOrder/>
      
      <p>Jonas</p>
    </header>
  )
}

export default Header
