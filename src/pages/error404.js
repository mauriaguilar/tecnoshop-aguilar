import React from 'react';
import { useRouteMatch } from 'react-router';

const NotFound = ({ item, onAdd }) => {
  const { url } = useRouteMatch();

  return (
    <>
      <h1>
        Please check the url 😉
      </h1>
      <div>{url}</div>
    </>
  );
}

export default NotFound;
