import React from 'react';

const Card = (props) => {
  const shortStringArray = props.disc.split(" ", 20);
  const shortString = shortStringArray.join(" ");
  const posterUrl = `https://image.tmdb.org/t/p/original/${props.poster_path}`;

  return (
    <div>
      <div className="card bg-dark text-white flex-fill" style={{ width: "18rem" }}>
        <img src={posterUrl} className="card-img-top" alt="..." style={{ height: "15rem" }} />
        <div className="card-body">
          <h3>{props.title}</h3>
          <p className="card-text">
            {shortString}. <a href="#" className="fs-6">View more</a>
          </p>
          <button className="btn btn-secondary" onClick={() => props.showModal(props.mid)}>View more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
