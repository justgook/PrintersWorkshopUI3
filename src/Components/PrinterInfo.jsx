import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
// 

class PrinterInfo extends Component {
  render() {
    return (
      <Tabs>
        <Tab label="Status" >
          gjfpg;ljgkldf
        </Tab>
        <Tab label="Progress" >
          2
        </Tab>
        <Tab label="Control" >
          <RaisedButton
            icon={<FontIcon className="material-icons">keyboard_arrow_up</FontIcon>}
secondary={true}
          />
        </Tab>
      </Tabs>
    )
  }
}

export default PrinterInfo