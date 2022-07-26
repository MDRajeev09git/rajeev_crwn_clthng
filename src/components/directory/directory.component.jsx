import DirectoryItem from '../directory-item/directory-item.component';
import {DirctoryContainer} from './directory.styles';

  const categories=
  [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      route:'shop/hats'
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      route :"shop/jackets"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      shop:"shop/sneakers"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      shop:'shop/womens'
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      shop:'shop/mens'
    }
  ];
  const Directory=() => {
      return (
        <DirctoryContainer>
            
              {categories.map((category)=>(  
                 <DirectoryItem  key={category.id} category={category} />
             ))}   
             </DirctoryContainer>
      );
  };   
export default Directory;

