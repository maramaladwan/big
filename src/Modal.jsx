import React from 'react';

const Modal = (props) => {
  const { show, modalData, hide } = props;

  if (!show) {
    return null; // Don't render the modal if show is false
  }

  return (
    <div className='w-75 d-flex flex-column bg-secondary rounded w-50 m-auto p-3 z-1 position-fixed top-50 start-50 translate-middle'>
      <div className='d-flex flex-column'>
        <div className='d-flex border-bottom'>
          <h3 className='text-light'>{modalData.original_title}</h3>
          <button className='btn ms-auto btn-secondary align-self-baseline' onClick={hide}>
            &times;
          </button>
        </div>
        <div className='d-flex'>
          <img
            src={`https://image.tmdb.org/t/p/original/${modalData.poster_path}`}
            className="p-1 card-img-top"
            alt={`Poster for ${modalData.original_title}`}
            style={{ height: "15rem" }}
          />
          <div className='d-flex flex-column'>
            <p className='text-light p-2'>{modalData.overview}</p>
            <table className='table  table-borderless table-secondary table-hover'>
              <tbody>
                <tr>
                  <th>Media Type</th>
                  <td>{modalData.media_type}</td>
                </tr>
                <tr>
                  <th>Release Date</th>
                  <td>{modalData.release_date}</td>
                </tr>
                <tr>
                  <th>Popularity</th>
                  <td>{modalData.popularity}</td>
                </tr>
                <tr>
                  <th>Vote Average</th>
                  <td>{modalData.vote_average}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
