import React from 'react';
import {Card,CardBody} from 'reactstrap';
const UserComponent = ({user})=>{
    return(
        <Card>
            <img className="image" src={user.avatar_url} />
            <CardBody>
                <div className="text-primary" >{user.name}</div>
                <div className="text-primary" >{user.bio}</div>
                <div className="text-primary" >Available to Hire :{user.hireable ? "YES":"NO"}</div>
                <div className="text-primary" >No. of Repos : {user.public_repos}</div>
                <div className="text-primary" >Followers : {user.followers}</div>
            </CardBody>
        </Card>
    )
}
export default UserComponent;