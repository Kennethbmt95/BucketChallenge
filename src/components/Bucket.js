import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Liter from './Liter'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
}))

  function Bucket(props) {
    const classes = useStyles()

    const renderSteps = (steps) => {
      console.log(steps);
      const stepsToRender = steps.map((item, index) => {
        return (
          <Liter
            value={item.value}
          />
        )
      })

      return stepsToRender
    }

    return (
        <div className={classes.container}>
          <span>{props.name}</span>
          {renderSteps(props.steps)}
        </div>
   )
}

export default Bucket
