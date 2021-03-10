import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VerbCard from './verbCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';






const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  cards: {
    marginTop: 40,
  }
});


export default function Verbs(match) {
  useEffect(() => {
    fetchVerbs();
  }, []);

  const classes = useStyles();
  const [verbs, setVerbs] = useState('');
  const [step, setStep] = useState(0);
  const irregular = ["être", "avoir", "pouvoir", "faire", "mettre", "dire", "devoir", "prendre", "aller", "devoir", "vouloir"]
  const regular_er = ["parler", "manger", "aimer", "changer", "demander", "écouter", "fabriquer", "habiter", "jouer", "rester", "signer", "trouver", "visiter"]
  const regular_ir = []

  const data_verbs = {
    "data": {
      "verb1": {
        "category": 1,
        "id": 1,
        "infinitive": "parler",
        "present": {
          "Je": "parle",
          "Tu": "parle",
          "Il/Elle": "parle",
          "Nous": "parlons",
          "Vous": "parlez",
          "Ils/Elles": "parlent"
        },
        "imparfait": {
          "Je": "parlais",
          "Tu": "parlais",
          "Il/Elle": "parlait",
          "Nous": "parlions",
          "Vous": "parliez",
          "Ils/Elles": "parlaient"
        }
      },
      "verb2": {
        "category": 1,
        "id": 1,
        "infinitive": "être",
        "present": {
          "Je": "suis",
          "Tu": "es",
          "Il/Elle": "est",
          "Nous": "sommes",
          "Vous": "êtes",
          "Ils/Elles": "sont"
        },
        "imparfait": {
          "Je": "étais",
          "Tu": "étais",
          "Il/Elle": "étais",
          "Nous": "étions",
          "Vous": "étiez",
          "Ils/Elles": "étaient"
        }
      }
    }
  }

  console.log(data_verbs);

  async function fetchVerbs() {
    const data = await fetch('https://sheetdb.io/api/v1/uj038v3go0c43');
    const items = await data.json();
    setVerbs(items);
    console.log(items);
  }

  function addStep() {
    setStep(step + 1);
  }

  function ViewSwitch(props) {
    switch (props.value) {
      case 0:
        return (
          <div>
            <h1> Bienvenido al conjugador de verbos en frances.</h1>
            <br />
            <p> Presiona start para comenzar</p>
            <div>
              <Button variant="contained" color="primary" className={classes.button} onClick={addStep}>
                Start!
              </Button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className={classes.cards}>
            <VerbCard data={verbs} />
          </div>

        )


      default:
        <h1>Oops</h1>


    }

  }


  return (
    <Grid container>
      <Grid item md={3}>

      </Grid>
      <Grid item md={6}>

        <ViewSwitch value={step} />

      </Grid>
      <Grid item md={3}>
      </Grid>
    </Grid>


  );
}