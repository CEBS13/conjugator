import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));



export default function Category() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container>
        <Grid md={3}>

        </Grid>
        <Grid md={6}>
            <div className="verb-list-todos">
                
                <h3>Todos los verbos</h3>
                Practica aleatoria de todos los verbos y conjugaciones

            </div>

            <div className="important-verbs">
                <h3>Verbos Importantes</h3>
                <div>
                  <div> 
                  <h5><Link to={'/verbs/irregular/être'}>Être</Link></h5>
                  </div>
                </div>
                <div>
                  <div> 
                  <h5><Link to={'/verbs/irregular/avoir'}>Avoir</Link></h5>
                  </div>
                </div>
            </div>
            <div className="simple-verbs">    
                <h3>Verbos simples</h3>
              
                <h4>Conjugacion Presente</h4>
                <div>
                  <div> 
                  <h5><Link to={'/verbs/present/1'}>Verbos que terminan en -ar</Link></h5>
                  </div>
                </div>
                <div>
                  <div> 
                  <h5><Link to={'/verbs/present/2'}>Verbos que terminan en -ir</Link></h5>
                  </div>
                </div>
                <div>
                  <div> 
                  <h5><Link to={'/verbs/present/3'}>Verbos que terminan en -er</Link></h5>
                  </div>
                </div>

                <h4>Conjugacion Passe compose</h4>
                <ul>
                  <li>Verbos que terminan en -er</li>
                  <li>Verbos que terminan en -ir</li>
                  <li>Verbos que terminan en -ar</li>
                </ul>
                
            </div>

        </Grid>
        <Grid md={3}>
            
        </Grid>
    </Grid>
  );
}

