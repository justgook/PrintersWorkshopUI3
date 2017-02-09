import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar'
import Badge from 'material-ui/Badge'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import LinearProgress from 'material-ui/LinearProgress'
import { VictoryChart, VictoryLine, VictoryContainer } from 'victory'
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
  render() {
    return (
      <ListItem leftIcon={<Status status="printing" />}>
        Kosel Mini
        <LinearProgress mode="determinate" value={32} />
        <VictoryChart
          containerComponent={<VictoryContainer responsive={false} />}
        >
          <VictoryLine y={(data) => Math.sin(2 * Math.PI * data.x)} />
        </VictoryChart>
      </ListItem>
    )
    /*return (
      <Card>
        <CardHeader
          title=    {<Badge
      badgeContent="&copy;"
      badgeStyle={{fontSize: 20}}
    >
      Kossel Mini
    </Badge>}
          subtitle="just anather printer"
          actAsExpander={true}
          showExpandableButton={true}
          avatar={<Avatar>KM</Avatar>}
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    )*/
  }
}

class PrinterList extends Component {
  render() {
    return (
      <List>
        <Printer />
        <Printer />
        <Printer />

      </List>
    )
  }
}

export default PrinterList