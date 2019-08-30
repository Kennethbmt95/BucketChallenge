import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputs: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginBottom: '20px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  label: {
    textTransform: 'capitalize',
  },
}))

  function Form(props) {
    const classes = useStyles()

    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
          <div className={classes.inputs}>
            <TextField
              id="outlined-name"
              label="Bucket A"
              className={classes.textField}
              onChange={props.changeBucketA}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Bucket B"
              className={classes.textField}
              onChange={props.changeBucketB}
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button
            classes={{
              root: classes.button,
              label: classes.label,
            }}
            type="submit"
          >
            Start
          </Button>
       </form>
   )
}

export default Form
