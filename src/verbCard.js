import React, { useEffect, useState } from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { purple, grey, lightGreen } from '@material-ui/core/colors';
import CardAppBar from './cardAppBar';





const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: grey[50],
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
  
    },
    button: {
      marginLeft: 10,
      height: 56,
    },
    textField: {
      minWidth: 275,
      marginTop: 20,
    },
    buttonCheck:{
      backgroundColor: lightGreen[500],
      '&:hover': {
        backgroundColor: lightGreen[700],
      },
    },
    buttonDisable:{
      backgroundColor: grey[500],
      '&:hover': {
        backgroundColor: grey[700],
      },
    }
  });

  

export default function VerbCard( props) {
  const classes = useStyles();
  console.log(props.data);
  const verbs = props.data
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(Boolean(false));
  const [index, setIndex] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(Boolean(true));
  // const [verb, setVerb] = useState([]);


  function handleClick() {
    validate();
  }

  function showVerbs() {
    if(verbs.length > 0 ){
      return(
      <Typography variant="h4" component="h2">
      Je ______ ({verbs[index].Column1})
      </Typography>
      ); 
    }else {
      setTimeout(showVerbs,10);
    }

  }

  function validate(){
    if(answer !== "dog"){
        setError(Boolean(true));
        setIsButtonDisable(Boolean(true));
    } else{
      setError(Boolean(false));
      setIsButtonDisable(Boolean(false));
    }
  }

  function handleNext(){
    setIndex((prev) => prev + 1);
    setIsButtonDisable(Boolean(true));
    setAnswer("");


  }

  function showButtonNext(){
    if(isButtonDisable){
      return(
        <Button disable variant="contained" className={classes.buttonDisable} >
        Next
      </Button>
      );
    }else{
      return(
      <Button disable variant="contained" color="primary" className={classes.buttonCheck} onClick={handleNext}>
      Next
    </Button>
    );}
      
  }


  return (
    <div>
     <Card className={classes.root} variant="outlined">
          <CardContent>
            <CardAppBar/>
            <Typography className={classes.title} color="textSecondary" gutterBottom>

            </Typography>
            {/* <Typography variant="h5" component="h2">
               Je ______ ({verbs[1].Column1})
            </Typography> */}
            {showVerbs()}

            <form className={classes.textField} noValidate autoComplete="off">
              <TextField error={error} id="standard-basic" label="Reponde" variant="outlined" value={answer}  onChange={(event) => setAnswer(event.target.value)} />
              <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
                Check
              </Button>

            </form>
            <Typography variant="body2" component="p">
              comer
              <br />
              {'"a benevolent smile"'}
              <br />
             {showButtonNext()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" >Hint</Button>
          </CardActions>
        </Card>
    </div>
  );
}
