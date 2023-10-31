import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleUserdetailsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    const [users, setusers] = useState([]);
    useEffect(() => {
        //on mount
        client
            .service("userdetails")
            .get(urlParams.singleUserdetailsId, { query: { $populate: ["username"] }})
            .then((res) => {
                set_entity(res || {});
                const users = Array.isArray(res.username)
            ? res.username.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.username
                ? [{ _id: res.username._id, name: res.username.name }]
                : [];
        setusers(users);
                setusers(res?.username?.map((elem) => ({ _id: elem._id, name: elem.name })) || []);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Userdetails", type: "error", message: error.message || "Failed get userdetails" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/userdetails", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Userdetails</h3>
                </div>
                <p>userdetails/{urlParams.singleUserdetailsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">User Name</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.username}</p></div>
                    <label className="text-sm text-primary">Organization</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.organization}</p></div>
                    <label className="text-sm text-primary">Department</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.department}</p></div>
                    <label className="text-sm text-primary">Mobile Number</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.mobile}</p></div>
            <label className="text-sm">User Name</label>
            {users.map((elem) => (
                    <Link key={elem._id} to={`/users/${elem._id}`}>
                        <div className="card">
                            <p>{elem.name}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleUserdetailsPage);
