import react from 'react';


const ImageList = (props) => {
    const list = props.datapass.map(({id, urls, alt_description}) => {
        return <img key={id} src={urls.small} alt={alt_description}/>
    })
    return (
        <div>
            {list}
        </div>
    )
}

export default ImageList;