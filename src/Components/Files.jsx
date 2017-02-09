import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';


import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class FileMenu extends Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        {...this.props}
      >
        <MenuItem primaryText="Print" leftIcon={<FontIcon className="material-icons">print</FontIcon>} />
        {/*<MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />*/}
      </IconMenu>
    )
  }
}

class Files extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }
  render() {
    return (
      <List>
        <ListItem
          primaryText="first_print.gcode"
          secondaryText="30KB"
          leftIcon={<FontIcon className="material-icons">assignment</FontIcon>}
          rightIconButton={<FileMenu />}
        />
        <ListItem primaryText="Starred" leftIcon={<FontIcon className="material-icons">description</FontIcon>} />
        <ListItem primaryText="Sent mail" leftIcon={<FontIcon className="material-icons">description</FontIcon>} />
        <ListItem primaryText="Drafts" leftIcon={<FontIcon className="material-icons">description</FontIcon>} />
        <ListItem primaryText="Inbox" leftIcon={<FontIcon className="material-icons">description</FontIcon>} />
      </List>

    )
  }
}
export default Files;