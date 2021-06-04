import Marionette from 'backbone.marionette';
import {StockWatcherBody} from './StockWatcherBody';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new StockWatcherBody());
  }
});
