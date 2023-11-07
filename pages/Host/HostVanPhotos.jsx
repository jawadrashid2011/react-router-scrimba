import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const [currentVan, setCurrentVan] = useOutletContext();

    return (
        <section>
            <img src={currentVan.imageUrl} width={100}/>
        </section>
    )
}