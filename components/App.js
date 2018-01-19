import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import {FormLabel, FormControlLabel} from 'material-ui/Form'
import Radio, {RadioGroup} from 'material-ui/Radio'
import Switch from 'material-ui/Switch'
import TextField from 'material-ui/TextField'
import CenteredFlexBox from './CenteredFlexBox'
import QRView from './QRView'
import ErrorBoundary from './ErrorBoundary'

export default class App extends React.Component {
  constructor (attr) {
    super(attr)

    this.state = {
      value: '',
      background: '#ffffff',
      foreground: '#000000',
      level: 'Q',
      bitmap: false,
      size: 256
    }
  }

  render () {
    const {
      value,
      background,
      foreground,
      level,
      bitmap,
      size
    } = this.state

    return <Grid container justify='center' xs={12} spacing={8}>
      <Grid item xs={12} sm={6}>
        <TextField
          id='input'
          type='text'
          label='Input Text'
          value={value}
          onChange={event => this.setState({value: event.target.value})}
          fullWidth
        />

        <TextField
          id='bg-color'
          type='color'
          label='Background Color'
          value={background}
          onChange={event => this.setState({background: event.target.value})}
          fullWidth
        />

        <TextField
          id='fg-color'
          type='color'
          label='Foreground Color'
          value={foreground}
          onChange={event => this.setState({foreground: event.target.value})}
          fullWidth
        />

        <Paper>
          <FormLabel>Level</FormLabel>
          <RadioGroup value={level} onChange={(_, level) => this.setState({level})} row>{
            Array
              .from('LMQH')
              .map(x => <FormControlLabel
                value={x}
                control={<Radio />}
                label={x}
              />)
          }</RadioGroup>
        </Paper>

        <Paper>
          <FormLabel>Vector/BitMap</FormLabel>
          <Switch
            checked={bitmap}
            onChange={(_, bitmap) => this.setState({bitmap})}
            aria-label='Vector/BitMap'
          />
        </Paper>

        <Paper>
          <FormLabel>Image Size</FormLabel>
          <RadioGroup
            value={String(size)}
            onChange={(_, size) => this.setState({size: Number(size)})}
            row
          >{
            [32, 64, 128, 256, 512]
              .map(x => <FormControlLabel
                value={String(x)}
                control={<Radio />}
                label={x}
              />)
          }</RadioGroup>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CenteredFlexBox item={
          <ErrorBoundary>
            <QRView
              value={value}
              bgColor={background}
              fgColor={foreground}
              level={level}
              bitmap={bitmap}
              size={Number(size)}
              style={{width: Number(size), height: Number(size)}}
            />
          </ErrorBoundary>
        } />
      </Grid>
    </Grid>
  }
}
