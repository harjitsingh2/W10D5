import {NavLink} from "react-router-dom"


const GalleryNavigation = ({galleries}) => {

    const galleryLinks = galleries.map((gallery) => {
        return (
        <NavLink to={`/galleries/${gallery.id}`}>Words
        </NavLink>
        )
    })
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <h1>Galleries</h1>
            <NavLink to="/galleries/1">Gallery 1</NavLink>
            <NavLink to={`/galleries/${galleries.id}`}>Words</NavLink>

        </nav>




    )
}


export default GalleryNavigation;
