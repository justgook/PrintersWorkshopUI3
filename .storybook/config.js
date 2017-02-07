import * as storybook from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'Printer Workshop',
  url: 'https://github.com/justgook/PrintersWorkshopUI3',
  goFullScreen: false,
  // showLeftPanel: false,
  // showDownPanel: false,
  // showSearchBox: false,
  // downPanelInRight: false,
  // sortStoriesByKind: false,
});

function loadStories() {
   require('../stories/index.js')
  // You can require as many stories as you need.
}

// configure(loadStories, module);

storybook.configure(loadStories, module);