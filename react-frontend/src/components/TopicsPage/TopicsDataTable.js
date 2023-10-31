
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';


const TopicsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.topicstitle}</p>
    const ratingTemplate1 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.topicrating} cancel={false}  />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.comment}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="topicstitle" header="Topic" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="topicrating" header="Rating" body={ratingTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="comment" header="Comments" body={pTemplate2} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default TopicsDataTable;