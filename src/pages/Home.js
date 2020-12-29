import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserComponent from "../Component/UserComponent";
import Repo from "../Component/Repo";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ToastContainer , toast } from "react-toastify";

const Home = ()=>{
  const context = useContext(UserContext);
  const [name,setName]=useState("");
  const [user,setUser]=useState(null);
  const handleChange = event =>{
      setName(event.target.value);
  }

  const fetchUser = async ()=>{
    console.log(name);
    try{
      setUser(null);
      const url="https://api.github.com/users/";  
      const {data} =  await Axios.get(`${url}${name}`);
      setUser(data); 
      console.log(data);
    }
    catch(error){
      toast("Not able to locate user",{type:"error"});
    }
  }

  const handleClick = event =>{
      event.preventDefault();
      fetchUser();
  }
  
  if(context.user?.email){
    return (
      <Container>
        <ToastContainer />
        <Row className=" mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                value={name}
                placeholder="Please provide the username"
                onChange={handleChange}
              />
              <InputGroupAddon addonType="append">
                <Button onClick={handleClick} color="primary">Fetch User</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col md="7"></Col>
        </Row>
        <Row className="mt-3">
          <Col md="5" >{user? <UserComponent user={user} /> : null}</Col>
          <Col md="7">{user? <Repo repo_url={user.repos_url} /> : null }</Col>
        </Row>
      </Container>
    )
  }
  else{
    return <Redirect to='/signin' />
  }
}
export default Home;