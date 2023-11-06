import React from "react";

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElements = vans.map((van) => {
    return (
      <div key={van.id}>
        <img src={van.imageUrl} />
        <div className="vans-text">
          <div className="vans-name">{van.name}</div>
          <div className="vans-price-container">
            <div className="vans-price">${van.price}</div>
            <div className="vans-per">/day</div>
          </div>
        </div>
        <button className={`vans-button ${van.type}`}>{van.type}</button>
      </div>
    );
  });

  return (
    <div className="vans-page-container">
      <h1>Explore our vans options</h1>
      <div className="vans-filters">
        <div className="vans-filters-buttons">
          <button>Simple</button>
          <button>Luxury</button>
          <button>Rugged</button>
        </div>
        <div className="vans-filters-clear">Clear Filters</div>
      </div>
      <div className="vans-grid">{vansElements}</div>
    </div>
  );
}
