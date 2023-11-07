import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const [currentVan, setCurrentVan] = useOutletContext();

    return (
        <section>
            <div><b>Name:</b> {currentVan.name}</div>
            <br />
            <div><b>Category:</b> {currentVan.type}</div>
            <br />
            <div><b>Description:</b> {currentVan.description}</div>
            <br />
            <div><b>Visibility:</b> Public</div>
        </section>
    )
}