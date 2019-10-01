import React from 'react';

function Footer({ paginationSubmitHandler, links }) {
  return (
    <div id="footer">
        <button name="first" disabled={links.prev === undefined} onClick={e => paginationSubmitHandler(e)}>{"<<"} </button>
        <button name="prev" disabled={links.prev === undefined} onClick={e => paginationSubmitHandler(e)}>{"<"}</button>
        <button name="next" disabled={links.next === undefined} onClick={e => paginationSubmitHandler(e)}>{">"}</button>
        <button name="last" disabled={links.next === undefined} onClick={e => paginationSubmitHandler(e)}>{">>"}</button>
    </div>
  )
}

export default Footer;