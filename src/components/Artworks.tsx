// Artworks.tsx
import styled from "styled-components";
import { Artwork } from "../interfaces/Artworks";

const AllArtworksDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleArtworkDiv = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: #FFCD90;
    color: black;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Artworks(props: { data: Artwork[] }) {
    return (
        <AllArtworksDiv>
            {props.data.map((artwork: Artwork) => (
                <SingleArtworkDiv key={artwork.id}>
                    <h1>{artwork.title}</h1>
                    <p>{artwork.artist_display}</p>
                    <p>{artwork.date_display}</p>
                    <img
                        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                        alt={`image of ${artwork.title}`}
                    />
                </SingleArtworkDiv>
            ))}
        </AllArtworksDiv>
    );
}

