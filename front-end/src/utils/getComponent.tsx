import {
    Avatar,
    Button,
    Checkbox,
    Chip,
    Fab,
    MenuItem,
    Radio,
    Select,
    Slider,
    Switch,
    TextareaAutosize,
    TextField
} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import {ComponentParams} from "../types";

// returns sx's info
function getSx(params: ComponentParams) {
    return ({
        width: `${params.width}%`,
        height: `${params.height}%`,
        left: `${params.left}%`,
        top: `${params.top}%`,
        position: "absolute",
    });
}

// Button
function getButton(params: ComponentParams, key: string) {
    return (
        <Button
            variant="contained"
            sx={getSx(params)}
            key={key}
        >
            Button
        </Button>
    )
}

// checked Checkbox
function getCheckbox(params: ComponentParams, checked: boolean, key: string) {
    return (
        <Checkbox
            defaultChecked={checked}
            sx={getSx(params)}
            key={key}
        />
    )
}

// Chip
function getChip(params: ComponentParams, key: string) {
    return (
        <Chip
            sx={getSx(params)}
            key={key}
        />
    )
}

// DataGrid
function getDataGrid(params: ComponentParams, key: string) {
    // DataGrid's rows
    const rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon'},
        {id: 2, lastName: 'Lannister', firstName: 'Cersei'},
        {id: 3, lastName: 'Lannister', firstName: 'Jaime'},
    ];

    // DataGrid's columns
    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        }
    ];

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            sx={getSx(params)}
            key={key}
        />
    )
}

// Dropdown
function getDropdown(params: ComponentParams, key: string) {
    return (
        <Select
            label="Dropdown"
            sx={getSx(params)}
            key={key}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
        </Select>
    )
}

// Floating Button
function getFloatingButton(params: ComponentParams, key: string) {
    // button size
    const size = Math.min(params.width, params.height);
    params.width = size;
    params.height = size;

    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={getSx(params)}
            key={key}
        >
            <AddIcon/>
        </Fab>
    )
}

// Image
function getImage(params: ComponentParams, key: string) {
    return (
        <Avatar
            variant="square"
            sx={getSx(params)}
            key={key}
        >
            X
        </Avatar>
    )
}

// Radio
function getRadio(params: ComponentParams, checked: boolean, key: string) {
    return (
        <Radio
            checked={checked}
            value="radio"
            sx={getSx(params)}
            key={key}
        />
    )
}

// Slider
function getSlider(params: ComponentParams, key: string) {
    return (
        <Slider
            disabled
            defaultValue={30}
            sx={getSx(params)}
            key={key}
        />
    )
}

// Switch
function getSwitch(params: ComponentParams, checked: boolean, key: string) {
    return (
        <Switch
            defaultChecked={checked}
            sx={getSx(params)}
            key={key}
        />
    )
}

// TextField
function getTextField(params: ComponentParams, key: string) {
    return (
        <TextField
            label="Text Field"
            variant="outlined"
            sx={getSx(params)}
            key={key}
        />
    )
}

// TextArea
function getTextArea(params: ComponentParams, key: string) {
    return (
        <TextareaAutosize
            minRows={2}
            placeholder="Text Area"
            style={{
                width: `${params.width}%`,
                height: `${params.height}%`,
                left: `${params.left}%`,
                top: `${params.top}%`,
                position: "absolute",
            }}
            key={key}
        />
    )
}

export function getComponent(params: ComponentParams, type: number, key: string) {
    switch (type) {
        case 0:
            return getButton(params, key);
        case 1:
            return getCheckbox(params, true, key);
        case 2:
            return getCheckbox(params, false, key);
        case 3:
            return getChip(params, key);
        case 4:
            return getDataGrid(params, key);
        case 5:
            return getDropdown(params, key);
        case 6:
            return getFloatingButton(params, key);
        case 7:
            return getImage(params, key);
        case 8:
            return getRadio(params, true, key);
        case 9:
            return getRadio(params, false, key);
        case 10:
            return getSlider(params, key);
        case 11:
            return getSwitch(params, true, key);
        case 12:
            return getSwitch(params, false, key);
        case 13:
            return getTextField(params, key);
        case 14:
            return getTextArea(params, key);
        default:
            return null;
    }
}