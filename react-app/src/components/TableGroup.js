import React from "react";
import {
  GridToolbar,
  GridOverlay,
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
} from "@material-ui/data-grid";
import { Backdrop } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const columns = [
  {
    field: "id",
    headerClassName: "super-app-theme--header",
    headerName: "ID",
    width: 70,
  },
  {
    field: "firstName",
    headerClassName: "super-app-theme--header",
    headerName: "First name",
    width: 130,
  },
  {
    field: "lastName",
    headerClassName: "super-app-theme--header",
    headerName: "Last name",
    width: 130,
  },
  {
    field: "age",
    headerClassName: "super-app-theme--header",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerClassName: "super-app-theme--header",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Гринчак", firstName: "Владислав", age: 35 },
  { id: 2, lastName: "Доскіч", firstName: "Назар", age: 42 },
  { id: 3, lastName: "Заканич", firstName: "Ярослав", age: 45 },
  { id: 4, lastName: "Климус", firstName: "Юрій", age: 16 },
  { id: 5, lastName: "Кривко", firstName: "Андрій", age: 25 },
  { id: 6, lastName: "Марущак", firstName: "Микола", age: 150 },
  { id: 7, lastName: "Мишолівський", firstName: "В’ячеслав", age: 44 },
  { id: 8, lastName: "Мудрейко", firstName: "Руслан", age: 36 },
  { id: 9, lastName: "Нартов", firstName: "Данило", age: 65 },
  { id: 10, lastName: "Паскевич", firstName: "Денис", age: 65 },
  { id: 11, lastName: "Петруха", firstName: "Михайло", age: 65 },
  { id: 12, lastName: "Пульс", firstName: "Ростислав", age: 65 },
  { id: 13, lastName: "Романко", firstName: "Ростислав", age: 65 },
  { id: 14, lastName: "Синюк", firstName: "Денис", age: 65 },
  { id: 15, lastName: "Сохан", firstName: "Мирон", age: 65 },
  { id: 16, lastName: "Сухий", firstName: "Андрій", age: 65 },
  { id: 17, lastName: "Тригуб", firstName: "Юрій", age: 65 },
  { id: 18, lastName: "Чайка", firstName: "Роман", age: 65 },
  { id: 19, lastName: "Швед", firstName: "Святослав", age: 65 },
  { id: 20, lastName: "Щебововк", firstName: "Юрій", age: 65 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .super-app-theme--header": {
      color: "#FFF",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <LinearProgress color="secondary" />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <LinearProgress color="secondary" />
      </div>
    </GridOverlay>
  );
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <h3 style={{ borderBottom: "2px solid black" }}>Список групи</h3>
      {/* <GridColumnsToolbarButton />
      <GridFilterToolbarButton /> */}
    </GridToolbarContainer>
  );
}

export default function TableGroup() {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  return (
    <div
      style={{
        background: "#595962",
        marginTop: 120,
        height: 460,
        width: "100%",
      }}
      className={classes.root}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: CustomToolbar,
        }}
        //loading
        checkboxSelection
      />
    </div>
  );
}
