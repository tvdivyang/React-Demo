import { useNavigate } from "react-router";

function Logout() {
  const history = useNavigate();

  if (localStorage.removeItem("postdata")) {
    console.log("if");
    return "hello";
    
} else {
    console.log("else");
    return history("/login");
    
  }
}

export default Logout;
