import Artworks from "./components/Artworks.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Artwork } from "./interfaces/Artworks.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
    const [data, setData] = useState<Artwork[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.artic.edu/api/v1/artworks");
            const { data }: { data: Artwork[] } = await rawData.json();
            setData(data);
        }
        fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
}, [data.length]);

    return (
        <ParentDiv>
            <Artworks data={data} />
        </ParentDiv>
    );
}