import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import Files from './Files'
const recentsIcon = <FontIcon className="material-icons">home</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


class Footer extends Component {
  state = {
    selectedIndex: 1
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Files"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Printers"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Settings"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>

        <Drawer
          docked={false}
          onRequestChange={(open)=> !open && this.select(1)}
          width={500}
          open={this.state.selectedIndex === 0}
        >
          <Files />
        </Drawer>

       <Drawer
          docked={false}
          onRequestChange={(open)=> !open && this.select(1)}
          open={this.state.selectedIndex === 2}
          openSecondary={true}
          width={500}
          disableSwipeToOpen={false}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>

      </Paper>
    );
  }
}

export default Footer;