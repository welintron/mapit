export class Init {
    load(){
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log('No markers found...creating');
            var markers = [
                {
                    name: 'Company One',
                    lat: 51.678200,
                    lng: 7.809200,
                    draggable: true
              
                  },
                  {
                    name: 'Company Two',
                    lat: 51.679200,
                    lng: 7.819200,
                    draggable: true
              
                  },    
                  {
                    name: 'Company Three',
                    lat: 51.688200,
                    lng: 7.808200,
                    draggable: true
              
                  },

            ];

            localStorage.setItem('markers', JSON.stringify(markers));
            } else {
                console.log('Loading markers...');
            }

        }
    }