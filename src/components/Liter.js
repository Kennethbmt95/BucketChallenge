import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    width: '50px',
    height: '50px',
    border: 'solid 1px #3F51B5',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
    color: '#3F51B5'
  },
}))

  function Liter(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
          {props.value}
        </div>
   )
}

export default Liter
