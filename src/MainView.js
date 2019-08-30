import React, { useState, useEffect } from 'react'
import { createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Bucket from './components/Bucket'
import Form from './components/Form'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

let totalStepsA = [{value: 0}]
let totalStepsB = [{value: 0}]

const useStyles = makeStyles({
  buckets: {
    width: '300px',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  h3: {
    fontFamily: 'Roboto'
  },
  title: {
    color: 'blue',
  }
})

  function MainView() {
    const classes = useStyles()
    const [calculate, setCalculate] = useState(false)
    const [bucketA, setBucketA] = useState(0)
    const [bucketB, setBucketB] = useState(0)
    const [currentValueA, setCurrentValueA] = useState(0)
    const [currentValueB, setCurrentValueB] = useState(0)
    const [steps, setSteps] = useState(0)

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))

    useEffect(() => {
      if (calculate) {
          if (currentValueA !== 0 || currentValueB !== 0) {
            totalStepsA.push({ value: currentValueA })
            totalStepsB.push({ value: currentValueB })
          }
        if ((currentValueA === 4 || currentValueB === 4) && (currentValueA === 0 || currentValueB === 0)) {
            setCalculate(false)
            setCurrentValueA(0)
            setCurrentValueB(0)

        } else {
          if (currentValueB === bucketB && bucketB !== 0) {
              empty()
              setSteps(steps + 1)
          }
          if (currentValueA > 0 && currentValueB < bucketB) {
              transfer()
              setSteps(steps + 1)
          }
          if (currentValueA === 0 && bucketA !== 0) {
              fill()
              setSteps(steps + 1)
          }
        }
      }
    })

    const empty = () => {
        setCurrentValueB(0)
    }

    const fill = () => {
      if (currentValueA === 0) {
        setCurrentValueA(bucketA)
      } else {
        setCurrentValueA(bucketA - currentValueA)
      }
    }

    const transfer = () => {
      if (currentValueA > currentValueB) {
        if (currentValueA >= (bucketB - currentValueB)) {
          let valueToTransfer = bucketB - currentValueB
          setCurrentValueB(valueToTransfer + currentValueB)
          setCurrentValueA(currentValueA - valueToTransfer)
        } else {
          setCurrentValueB(currentValueA + currentValueB)
          setCurrentValueA(currentValueA - currentValueA)
        }
      } else if (currentValueA === currentValueB) {
        if ((currentValueA + currentValueB) > bucketB) {
          setCurrentValueB(bucketB)
          setCurrentValueA((currentValueA + currentValueB) - bucketB)
        } else {
          setCurrentValueB(currentValueA + currentValueB)
          setCurrentValueA(currentValueA - currentValueA)
        }
      } else {
        let valueToTransfer = bucketB - currentValueB
        setCurrentValueB(valueToTransfer)
        setCurrentValueA(currentValueA - valueToTransfer)
      }
    }

    const changeBucketA = (event) => setBucketA(Number(event.target.value))

    const changeBucketB = (event) => setBucketB(Number(event.target.value))

    const handleSubmit = (event) => {
      event.preventDefault()
        totalStepsA = [{value: 0}]
        totalStepsB = [{value: 0}]
        setCalculate(true)
        setSteps(0)
    }
    return (
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">3,4,5 CHALLENGE</Typography>
        </ThemeProvider>
        <Form
          handleSubmit={handleSubmit}
          changeBucketA={changeBucketA}
          changeBucketB={changeBucketB}
        />
        <div className={classes.buckets}>
          <Bucket
            steps={totalStepsA}
            name='Bucket A'
          />
          <Bucket
            steps={totalStepsB}
            name='Bucket B'
          />
        </div>
          <h2 className={classes.h3}>{`Total Steps: ${steps}`}</h2>
      </div>
   )
}

export default MainView
