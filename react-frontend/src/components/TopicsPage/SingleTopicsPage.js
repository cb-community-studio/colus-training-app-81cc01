import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';

const SingleTopicsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("topics")
            .get(urlParams.singleTopicsId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Topics", type: "error", message: error.message || "Failed get topics" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/topics", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Topics</h3>
                </div>
                <p>topics/{urlParams.singleTopicsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Topic</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.topicstitle}</p></div>
                    <label className="text-sm text-primary">Rating</label>
                    <div className="ml-3"><Rating stars={5} style={{width:"20rem"}} value={_entity?.topicrating} onChange={ (e) => onChange={ (e) => setValByKey("topicrating", e.target.value)} cancel={false}  /></div>
                    <label className="text-sm text-primary">Comments</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.comment}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleTopicsPage);
