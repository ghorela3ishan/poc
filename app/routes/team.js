import Route from '@ember/routing/route';

export default Route.extend({
	model() {
     
			return [{
      id: '1',
      name: 'Shailendra',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Shahrukh_interacts_with_media_after_KKR%27s_maiden_IPL_title.jpg/220px-Shahrukh_interacts_with_media_after_KKR%27s_maiden_IPL_title.jpg',
    }, 
    {id: '2',
      name: 'Bhavya ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/KatrinaKaif.jpg/220px-KatrinaKaif.jpg',
    }, 
    {id: '3',
      name: 'Ishan',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Salman_Khan_2015.jpg/220px-Salman_Khan_2015.jpg',
    }, 
    {id: '4',
      name: 'Priyambada',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Aishwarya_Rai_Cannes_2017.jpg/220px-Aishwarya_Rai_Cannes_2017.jpg',
    }, 
    {id: '5',
      name: 'Ayush',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Aamir_Khan_2013.jpg/220px-Aamir_Khan_2013.jpg',
    } 
    ]
	}
});
