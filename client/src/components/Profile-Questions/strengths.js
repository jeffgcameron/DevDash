// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Checkbox from '@material-ui/core/Checkbox';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//     },
//     formControl: {
//       margin: theme.spacing(3),
//     },
//   }));

// function Strengths (){
//     const classes = useStyles();
//     const [checkStrengths, setCheckStrengths] = React.useState({
//       frontend: false,
//       styling: false,
//       backend: false,
//       database: false,
//       cloud: false
//     });
//     const handleChange = (event) => {
//         setCheckStrengths({ ...checkStrengths, [event.target.name]: event.target.checked });
//       };
    
//       const { frontend, styling, backend, database, cloud } = checkStrengths;
//       //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
//     return(
//         <>
//         <div className={classes.root}>
//       <FormControl component="fieldset" className={classes.formControl}>
//         <FormLabel component="legend">What are your strengths?</FormLabel>
//         <FormHelperText>Select All That Apply</FormHelperText>
//         <FormGroup>
//           <FormControlLabel
//             control={<Checkbox checked={frontend} onChange={handleChange} name="frontend" />}
//             label="Frontend Development"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={styling} onChange={handleChange} name="styling" />}
//             label="Frontend Styling"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={backend} onChange={handleChange} name="backend" />}
//             label="Backend Development"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={database} onChange={handleChange} name="database" />}
//             label="Data/Databases"
//           />
//           <FormControlLabel
//             control={<Checkbox checked={cloud} onChange={handleChange} name="cloud" />}
//             label="Cloud Computing"
//           />
//         </FormGroup>
        
//       </FormControl>
//     </div>
//         </>
//     )
// }
// export default Strengths;



import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
// import TextField from '@material-ui/core/TextField';

const strengths = [
    {
        value: 'frontendDevelopement',
        label: 'Front End Development',
    },
    {
        value: 'frontendStyling',
        label: 'Front End Styling',
    },
    {
        value: 'backendDevelopment',
        label: 'Backend Development',
    },
    {
        value: 'data',
        label: 'Data/Databases',
    },
    {
        value: 'cloud',
        label: 'Cloud Computing',
    },
    {
        value: 'other',
        label: 'Other',
    },

];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Strengths() {
    const classes = useStyles();
    const [strength, setStrength] = React.useState([]);

    const handleChange = (event) => {
        setStrength(event.target.value);

    };




    
    // make a function for the "other" selection
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className="strength">
                {/* Need to work on select all feature, this component below only lets user select one */}
                <InputLabel id="demo-mutiple-name-label">What are your Strengths?</InputLabel>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="strength-signup"
                    multiple
                    value={strength}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                    type="checkbox"
                >
                {strengths.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                </Select>
            </div>
        </form >
    )
}
export default Strengths;

