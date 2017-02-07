import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'


class Printer extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Kossel Mini"
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
    )
  }
}

class PrinterList extends Component {
  render() {
    return (
      <div>
        <Printer />
        <Printer />
        <Printer />

      </div>
    )
  }
}

export default PrinterList