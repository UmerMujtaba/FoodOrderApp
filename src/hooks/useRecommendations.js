import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecommendations } from '../redux/slices/recommendationSlice';
import { supabase } from '../utils/supabase';

export const useRecommendations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendations()); // Initial fetch

    const channel = supabase
      .channel('public:item_counts') // Use 'channel' for real-time subscription
      .on('postgres_changes', { event: '*', schema: 'public', table: 'item_counts' }, () => {
        dispatch(fetchRecommendations());
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel); // Cleanup subscription on unmount
    };
  }, [dispatch]);
};
