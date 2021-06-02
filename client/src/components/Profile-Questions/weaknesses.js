import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

function Weaknesses (){
    const classes = useStyles();
    const [checkStrengths, setCheckStrengths] = React.useState({
      frontend: false,
      styling: false,
      backend: false,
      database: false,
      cloud: false
    });
    const handleChange = (event) => {
        setCheckStrengths({ ...checkStrengths, [event.target.name]: event.target.checked });
      };
    
      const { frontend, styling, backend, database, cloud } = checkStrengths;
      //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    return(
        <>
        <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">What are your weaknesses?</FormLabel>
        <FormHelperText>Select All That Apply</FormHelperText>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={frontend} onChange={handleChange} name="frontend" />}
            label="Frontend Development"
          />
          <FormControlLabel
            control={<Checkbox checked={styling} onChange={handleChange} name="styling" />}
            label="Frontend Styling"
          />
          <FormControlLabel
            control={<Checkbox checked={backend} onChange={handleChange} name="backend" />}
            label="Backend Development"
          />
          <FormControlLabel
            control={<Checkbox checked={database} onChange={handleChange} name="database" />}
            label="Data/Databases"
          />
          <FormControlLabel
            control={<Checkbox checked={cloud} onChange={handleChange} name="cloud" />}
            label="Cloud Computing"
          />
        </FormGroup>
        
      </FormControl>
    </div>
        </>
    )
}
export default Weaknesses;