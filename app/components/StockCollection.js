import { CollectionView } from 'backbone.marionette';
import { StockCard } from './StockCard';

export const StockCollection = CollectionView.extend({
  template: "<h3>Stock Collection</>",
  childView: StockCard,

  onRender() {
    console.log('Render Stock Collection');

    

    // this.showChildView('stocksBody', new StockCollection({
    //   model: stocks
    // }));
  }
})