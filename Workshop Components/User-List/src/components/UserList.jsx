import UserItem from "./UserItem";

const UserList = (props) => {

    console.log(props.dataInfo);

    return (
        <tbody>
           {props.dataInfo.map((e, index) => <UserItem key={e._id} data={e}/>)}
        </tbody>
    );
}

export default UserList;