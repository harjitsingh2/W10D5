import {NavLink} from "react-router-dom";
import "./GalleryNavigation.css";


const GalleryNavigation = ({galleries}) => {

    const galleryLinks = galleries.map((gallery) => {
        return (
         <li>
            <NavLink to={`/galleries/${gallery.id}`}>
                {gallery.name}
            </NavLink>
         </li>
        )
    })
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <h1>Galleries</h1>
            <ul>
            {galleryLinks}
            </ul>

        </nav>




    )
}


export default GalleryNavigation;
