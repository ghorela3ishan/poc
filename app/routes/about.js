import Route from '@ember/routing/route';

export default Route.extend({
  model() {
      return [{
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'ABC',
        city: 'San Francisco',
        category: 'Lorem ipsum dolor sit amet. ',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
      }, {
        id: 'urban-living',
        title: 'Urban Living',
        owner: 'XYZ',
        city: 'Seattle',
        category: 'Lorem ipsum dolor sit amet.',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
      }, {
        id: 'downtown-charm',
        title: 'Downtown Charm',
        owner: 'PQR',
        city: 'Portland',
        category: 'Lorem ipsum dolor sit amet.',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
      }];
    }
  });
