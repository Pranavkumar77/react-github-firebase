import React from "react";
import {Card,CardBody} from "reactstrap";

const UserCard = ({user}) => {
    return(
        <Card className="text-center mt-3 mb-4">
          <img src={user.avatar_url} className="image-thumbnail"/>
          <CardBody>
    <div className="text-primary">{user.name}</div>
    <div className="text-primary">{user.location}</div>
    <div className="text-info">Available For Hire:{user.hireable ? "YES" : "NO"}</div>
    <div className="text-primary">Followers:{user.followers_url}</div>
          </CardBody>
        </Card>
    );
}

export default UserCard;