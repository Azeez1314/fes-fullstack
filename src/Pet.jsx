import React from 'react';
import { Link } from 'react-router-dom';

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };

const Pet = (props) => {
    const { name, animal, images, location, id } = props;

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
        hero = images[0];
    }

    return (
        <Link href={`/details/${id}`} className="pet">
            <div className='image-container'>
                <img src={hero} alt={name} />
            </div>
            <div className='info'>
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </Link>
        // <div>
        //     <h1>{props.name}</h1>
        //     <h2>{props.animal}</h2>
        //     <h3>{props.breed}</h3>
        // </div>
    )
}

  export default Pet;