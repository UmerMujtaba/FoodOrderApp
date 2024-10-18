import { supabase } from '../supabase';
import { sendCallDeclineInvitation, sendCallInvitation } from './sendCallInvitaitonHelper';


export const fetchRecipientToken = async (randomUser) => {
  if (randomUser && randomUser.email) {
    const { data, error } = await supabase
      .from('logged_in_user')
      .select('fcm_token')
      .eq('email', randomUser.email)
      .single();

    if (error) {
      console.error('Error fetching recipient token:', error);
      return null; // Return null if there's an error
    }

    // Check if data exists before accessing fcm_token
    if (data) {
      return data.fcm_token; // Return the FCM token if found
    } else {
      console.warn('No recipient token found for the given email.');
      return null; // Return null if no token is found
    }
  } else {
    console.warn('Random user or email is missing.');
    return null; // Return null if randomUser or email is not defined
  }
};

export const handleSendCallInvitation = async (recipientEmail, channelName, randomUser) => {
  const recipientToken = await fetchRecipientToken(randomUser);
  if (recipientToken) {
    sendCallInvitation(recipientToken, channelName, recipientEmail);
  } else {
   
    console.log('Recipient token not found');
  }
};


export const handleDeclineSendCallInvitation = async (recipientEmail, channelName, randomUser) => {
  const recipientToken = await fetchRecipientToken(randomUser);
  if (recipientToken) {
    sendCallDeclineInvitation(recipientToken, channelName, recipientEmail);
  } else {
   
    console.log('Recipient token not found');
  }
};


export const checkUserLoggedInStatus = async (randomUser, setRecipientEmail, setLoggedInStatus) => {
    try {
      if (randomUser && randomUser.email) {
        // Fetch data from logged_in_user table based on email
        const { data: loggedInData, error: loggedInFetchError } = await supabase
          .from('logged_in_user') // Make sure the table name is correct
          .select('*')
          .eq('email', randomUser.email)
          .eq('is_logged_in', true);
  
        if (loggedInFetchError) {
          throw loggedInFetchError;
        }
  
        if (loggedInData.length === 0) {
          setRecipientEmail('User is not logged in');
          console.log("🚀 ~ checkUserLoggedInStatus ~ 'User is not logged in':", 'User is not logged in')
          setLoggedInStatus(false); // User is not logged in
        } else {
          setRecipientEmail(randomUser.email); // Set recipient email to the user's email
          console.log("🚀 ~ checkUserLoggedInStatus ~ 'User is logged in':", 'User is logged in')
          setLoggedInStatus(true); // User is logged in
        }
        
      } else {
        setRecipientEmail('No user data available');
      }
    } catch (error) {
      console.error('Error checking logged-in status:', error);
      setRecipientEmail('Error fetching user login status');
    }
  };
