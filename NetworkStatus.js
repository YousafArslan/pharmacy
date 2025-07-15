import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setConnectionStatus, setLoading, setError } from './src/redux/network/network.slice'; // Import actions
import NetInfo from '@react-native-community/netinfo';

const NetworkStatus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch setLoading to indicate we are checking network status
    dispatch(setLoading(true));
    const unsubscribe = NetInfo.addEventListener(state => {
        console.log("state",state);
        
      dispatch(setConnectionStatus(state.isConnected)); // Dispatch the connection status
      dispatch(setLoading(false)); // Set loading to false when status is received
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return null; // This component doesn't need to render anything
};

export default NetworkStatus;
