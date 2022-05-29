import {
    Avatar,
    Button,
    Checkbox,
    Chip,
    Fab,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    Select,
    SelectChangeEvent,
    Slider,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextareaAutosize,
    TextField
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {ComponentParams} from "../types";
import {useState} from "react";

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
function GetButton(params: ComponentParams, key: string) {
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
function GetCheckbox(params: ComponentParams, checked: boolean, key: string, size: string) {
    const fontSize = parseInt(size.slice(0, 2)) * Math.min(params.width, params.height) / 100;

    return (
        <Checkbox
            defaultChecked={checked}
            sx={{
                '& .MuiSvgIcon-root': {
                    fontSize: `${fontSize}vw`,
                },
                left: `${params.left}%`,
                top: `${params.top}%`,
                position: "absolute",
            }}
            key={key}
        />
    )
}

// Chip
function GetChip(params: ComponentParams, key: string) {
    return (
        <Chip
            sx={getSx(params)}
            label="Chip"
            variant="outlined"
            key={key}
            onDelete={() => console.log('chip')}
        />
    )
}

// DataGrid
function GetDataGrid(params: ComponentParams, key: string) {
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return {name, calories, fat, carbs, protein};
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <TableContainer
            component={Paper}
            sx={getSx(params)}
            key={key}
            elevation={0}
        >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// Dropdown
function GetDropdown(params: ComponentParams, key: string) {
    const [value, setValue] = useState('');
    const onChange = (event: SelectChangeEvent) => setValue(event.target.value);
    const sx = {width: '100%', height: '100%'}

    return (
        <FormControl
            sx={getSx(params)}
            key={key}
        >
            <InputLabel sx={sx}>Dropdown</InputLabel>
            <Select
                label="Dropdown"
                value={value}
                onChange={onChange}
                sx={sx}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
            </Select>
        </FormControl>
    )
}

// Floating Button
function GetFloatingButton(params: ComponentParams, key: string) {
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
function GetImage(params: ComponentParams, key: string) {
    return (
        <Avatar
            variant="square"
            sx={getSx(params)}
            key={key}
        >
            Image
        </Avatar>
    )
}

// Radio
function GetRadio(params: ComponentParams, checked: boolean, key: string, size: string) {
    const fontSize = parseInt(size.slice(0, 2)) * Math.min(params.width, params.height) / 100;

    return (
        <Radio
            checked={checked}
            value="radio"
            sx={{
                '& .MuiSvgIcon-root': {
                    fontSize: `${fontSize}vw`,
                },
                left: `${params.left}%`,
                top: `${params.top}%`,
                position: "absolute",
            }}
            key={key}
        />
    )
}

// Slider
function GetSlider(params: ComponentParams, key: string) {
    return (
        <Paper
            sx={{
                ...getSx(params),
                display: 'flex',
                alignItems: 'center',
            }}
            key={key}
            elevation={0}
        >
            <Slider
                defaultValue={30}
                sx={{
                    width: '100%',
                }}
                key={key}
            />
        </Paper>
    )
}

// Switch
function GetSwitch(params: ComponentParams, checked: boolean, key: string) {
    return (
        <Paper
            sx={{
                ...getSx(params),
                display: 'flex',
                alignItems: 'center',
            }}
            key={key}
            elevation={0}
        >
            <Switch
                defaultChecked={checked}
            />
        </Paper>
    )
}

// TextField
function GetTextField(params: ComponentParams, key: string) {
    return (
        <Paper
            sx={{
                ...getSx(params),
                display: 'flex',
                alignItems: 'center',
            }}
            key={key}
            elevation={0}
        >

            <TextField
                label="Text Field"
                variant="outlined"
                sx={{
                    width: '100%',
                }}
            />
        </Paper>
    )
}

// TextArea
function GetTextArea(params: ComponentParams, key: string) {
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

export function GetComponent(params: ComponentParams, type: number, key: string, size: string) {
    switch (type) {
        case 1:
            return GetButton(params, key);
        case 2:
            return GetCheckbox(params, true, key, size);
        case 3:
            return GetCheckbox(params, false, key, size);
        case 4:
            return GetChip(params, key);
        case 5:
            return GetDataGrid(params, key);
        case 6:
            return GetDropdown(params, key);
        case 7:
            return GetFloatingButton(params, key);
        case 8:
            return GetImage(params, key);
        case 9:
            return GetRadio(params, true, key, size);
        case 10:
            return GetRadio(params, false, key, size);
        case 11:
            return GetSlider(params, key);
        case 12:
            return GetSwitch(params, true, key);
        case 13:
            return GetSwitch(params, false, key);
        case 14:
            return GetTextField(params, key);
        case 15:
            return GetTextArea(params, key);
        default:
            return null;
    }
}