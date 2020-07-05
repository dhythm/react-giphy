import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import React from 'react';

const gf = new GiphyFetch(process.env.API_KEY_GIPHY);
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

const GiphyView: React.FunctionComponent = () => {
  return <Grid width={800} columns={3} fetchGifs={fetchGifs} />;
};

export default GiphyView;
