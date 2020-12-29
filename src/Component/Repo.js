import React,{useState,useEffect} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';
import Axios from 'axios';
const Repo = ({repo_url})=>{
    const [repos,setRepos]=useState([]);
    const fetchRepos = async ()=>{
        const {data}=await Axios.get(repo_url);
        setRepos(data);
    }
    useEffect(()=>{
        fetchRepos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[repo_url])
    return(
        <ListGroup>
            {repos.map(repo=>(
                <ListGroupItem key={repo.id} >
                    <div className="text-primary">Name:{repo.name}</div>
                    <div className="text-primary">Language:{repo.language}</div>
                    <div className="text-primary">Description:{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
export default Repo;