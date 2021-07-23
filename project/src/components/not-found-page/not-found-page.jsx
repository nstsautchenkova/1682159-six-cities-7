import React from 'react';
import Header from '../header/header.jsx';

function NotFoundPage() {
  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <div className="page__404">
            <svg height="70px" viewBox="0 0 512 512" width="70px">
              <path d="m0 96v384c0 17.679688 14.320312 32 32 32h448c17.679688 0 32-14.320312 32-32v-384zm0 0" fill="#e1eaf7" />
              <path d="m0 0h512v128h-512zm0 0" fill="#b0bec5" />
              <path d="m64 48h32v32h-32zm0 0" fill="#fff" />
              <path d="m128 48h32v32h-32zm0 0" fill="#fff" />
              <path d="m432 80h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="#90a4ae" />
              <path d="m384 320c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0" fill="#e76e54" />
              <path d="m315.3125 283.3125-22.625-22.625-36.6875 36.6875-36.6875-36.6875-22.625 22.625 36.6875 36.6875-36.6875 36.6875 22.625 22.625 36.6875-36.6875 36.6875 36.6875 22.625-22.625-36.6875-36.6875zm0 0" fill="#fff" />
            </svg>
            <h1>404 Not Found</h1>
          </div>
        </main>

      </div>
    </>
  );
}

export default NotFoundPage;
