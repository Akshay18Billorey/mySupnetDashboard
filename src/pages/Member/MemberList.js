import React from 'react'
import MaterialTable from 'material-table'
import 'material-icons/iconfont/material-icons.css';
function MemberList() {
    const mydata = [
        {
            name: "xyz",
            surname: "xyz",
            birthYear: "xyz",
            birthCity: "xyz",
        },
        {
            name: "xyz",
            surname: "xyz",
            birthYear: "xyz",
            birthCity: "xyz",
        },
    ];
    const columns = [
        { title: "NAME", field: "name" },
        { title: "M/F", field: "name" },
        { title: "DoB", field: "surname" },
        { title: "EMAIL", field: "birthYear" },
        { title: "CONDITION", field: "birthYear" },
        { title: "YEAR OF DIAGNOSIS", field: "birthYear" },
        { title: "ROLE", field: "birthYear" },
        { title: "MEDICATIONS", field: "birthYear" },
        { title: "DOCTOR", field: "birthYear" },
        { title: "ADVOCATE", field: "birthYear" },
        { title: "PHONE", field: "birthYear" },
    ];
    const User_Delete = (index) => {
        console.log(index);
    };
    return (
        <MaterialTable
            columns={columns}
            data={mydata}
            options={{
                showTitle: false,
                // exportButton: true,
                selection: true,
                search: false,
                paging: false,
                headerStyle: { backgroundColor: '#f9f9f9', color: "dodgerblue" }
            }}
            actions={[
                {
                    icon: "delete",
                    tooltip: "Delete User",
                    onClick: (event, rowData) => {
                        User_Delete(rowData.author);
                    },
                },
            ]}
        />
    )
}

export default MemberList
