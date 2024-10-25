

//getting response from backend for notification service
export const sendCallInvitation = async (recipientToken, channelName, recipientEmail) => {
    try {
        const response = await fetch('http://10.2.2.163:3000/send-notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: recipientToken,
                title: 'Call Invitation',
                body: `You have an incoming call on channel: ${channelName}.`,
                channel_name: channelName,
                recipientEmail: recipientEmail,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text(); // Change to .json() if your server returns JSON
        //playNotificationSound();
        console.log('Call invitation sent successfully:', result);

    } catch (error) {
        console.log('Failed to send call invitation:', error.method, error.message, error);
    }
};

export const sendCallDeclineInvitation = async (recipientToken, channelName, recipientEmail) => {
    try {
        const response = await fetch('http://10.2.2.163:3000/send-notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: recipientToken,
                title: 'Call Decline',
                body: `User have cancelled the call: ${channelName}.`,
                channel_name: channelName,
                recipientEmail: recipientEmail,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text(); // Change to .json() if your server returns JSON
        console.log('Call decline message sent successfully:', result);
    } catch (error) {
        console.log('Failed to send call decline message:', error.method, error.message, error);
    }
};

