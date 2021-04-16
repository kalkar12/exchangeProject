import React from 'react';

function HeaderVodHook(props) {
  return (
    <header style={{ backgroundImage: "url(images/cover.jpg)" }} className="container-fluid d-flex text-center align-items-end">
      <div className="container">
        <h1 className="mb-4 display-2">Vod Hooks Monkeys</h1>
      </div>
    </header>
  )
}

export default HeaderVodHook