import React, { Component } from 'react'
import PrinterInfo from './PrinterInfo'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar'
import Badge from 'material-ui/Badge'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import LinearProgress from 'material-ui/LinearProgress'
import { VictoryChart, VictoryLine, VictoryContainer } from 'victory'
import Dialog from 'material-ui/Dialog'

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const Status = ({status, ...props}) => {
  switch (status) {
    case 'offline': return <IconButton {...props} iconClassName="material-icons" tooltip="offline">highlight_off</IconButton>
    case 'printing': return <IconButton {...props} iconClassName="material-icons" tooltip="Printing..">print</IconButton>
    default: return null
  }
}


class Printer extends Component {
  closeDialog = () => console.log('close')
  render() {
    const {detailed} = this.props
    return (
      <ListItem leftIcon={<Status status="printing" />}>
        Kosel Mini
        <LinearProgress mode="determinate" value={32} />
        <VictoryChart
          containerComponent={<VictoryContainer responsive={false} />}
        >
          <VictoryLine y={(data) => Math.sin(2 * Math.PI * data.x)} />
        </VictoryChart>
        {
          detailed && <Dialog
          modal={false}
          open={detailed}
          onRequestClose={this.closeDialog}
        >
          <PrinterInfo />
        </Dialog>
        }
        
      </ListItem>
    )
  }
}

class PrinterList extends Component {
  render() {
    return (
      <List>
        <Printer detailed={true} />
        <Printer />
        <Printer />

      </List>
    )
  }
}

export default PrinterList