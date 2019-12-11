import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filmActions } from '../actions';

import { history } from '../../../../navigation/history';

export const useFilmFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = history.location.pathname.split('/').pop();
    dispatch(filmActions.filmFetchAsync(id));
  },[dispatch])

  const { data, isFetching, error } = useSelector((state) => state.film);

  return {
    data,
    isFetching,
    error
  }
};
