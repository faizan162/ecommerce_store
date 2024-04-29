import React from "react";

export default function Brands() {
  return (
    <section className="brands-outer py-10 bg-white">
      <div className="container">
        <div className="brands-inner ">
          <marquee scrollamount="15" width="100%" behavior="scroll">
            <ul className="flex gap-16">
              <li className="text-6xl font-semibold uppercase">Chanel</li>
              <li className="text-6xl font-semibold uppercase">
                Louis Vuitton
              </li>
              <li className="text-6xl font-semibold uppercase">Prada</li>
              <li className="text-6xl font-semibold uppercase">Calvin Klein</li>
              <li className="text-6xl font-semibold uppercase">Denim</li>
            </ul>
          </marquee>
        </div>
      </div>
    </section>
  );
}
