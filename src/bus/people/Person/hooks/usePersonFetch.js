import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { personActions } from '../actions';

import { history } from './../../../../navigation/history';

export const usePersonFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = history.location.pathname.split('/').pop();
    dispatch(personActions.personFetchAsync(id));
  },[dispatch])

  const { data, isFetching, error } = useSelector((state) => state.person);

  return {
    data,
    isFetching,
    error
  }
};
