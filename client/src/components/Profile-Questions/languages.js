import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const languages = [
    {
        value: 'frontend',
        label: 'HTML/CSS',
    },
    {
        value: 'javascript',
        label: 'Javascript',
    },
    {
        value: 'python',
        label: 'Python',
    },
    {
        value: 'react',
        label: 'React',
    },
    {
        value: 'java',
        label: 'Java',
    },
    {
        value: 'c++',
        label: 'C++',
    },
    {
        value: 'c#',
        label: 'C#',
    },
    {
        value: 'sql',
        label: 'SQL',
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

function Languages() {
    const classes = useStyles();
    const [language, setLanguage] = React.useState([]);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    // const handleChangeMultiple = (event) => {
    //     const { options } = event.target;
    //     const value = [];
    //     for (let i = 0, l = options.length; i < l; i += 1) {
    //         if (options[i].selected) {
    //             value.push(options[i].value);
    //         }
    //     }
    //     setLanguage(value);
    // };

    
    // make a function for the "other" selection
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className="language">
                {/* Need to work on select all feature, this component below only lets user select one */}
                <InputLabel id="demo-mutiple-name-label">Languages You Know</InputLabel>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    multiple
                    value={language}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                {languages.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                </Select>
            </div>
        </form >
    )
}
export default Languages;