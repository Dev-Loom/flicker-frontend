import React, { useState, useEffect } from "react";
import "./Addon.css";
import data from "../../utils/constant";
import axios from "axios";
function Addon() {
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    axios
      .get(`${data.URL}/getAddon`)
      .then((response) => response.data)
      .then((data) => setAddons(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="addon-grid">
          {addons.map((addonGroup) => (
            <div key={addonGroup._id} className="addon-group">
              <h1 className="m-3  text-center font-bold">{addonGroup.addons[0].title}</h1>
              <div className="item-grid">
                {addonGroup.addons[0].items.map((item) => (
                  <div key={item._id} className="item-card">
                    <img className="item-image" src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h5 className="item-name">{item.name}</h5>
                      <span className="item-price">₹ {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Addon;
