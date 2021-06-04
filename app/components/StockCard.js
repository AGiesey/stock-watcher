import Marionette from 'backbone.marionette';
import template from '../templates/stockCard.hbs'

//todo: it looks like this maybe should be a CollectionView
export const StockCard = Marionette.View.extend({
  template: template
});