
import './header.css'
import Input from "../shared/Input";

import { useState } from "react";
import {
  useHistory, 
  useLocation
} from "react-router-dom"

function HeaderSearch() {
  const [inputValue, setInputValue] = useState("")
  let history = useHistory()

  function handleSubmit (e) {
    e.preventDefault();
    if (inputValue) {
      
      history.push(`/search?key=${encodeURI(inputValue)}`)
    }
  }

  return (
    <div className="tcl-col-4">
      <form onSubmit={ handleSubmit }>
        <Input 
          type="search" 
          placeholder="Nhap gia tri search ..." 
          className="hello" 
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  )
}

export default HeaderSearch