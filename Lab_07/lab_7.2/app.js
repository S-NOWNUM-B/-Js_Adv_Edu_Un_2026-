import { NotificationFactory } from './NotificationFactory.js';

function sendNotification(type, options, message) {
	try {
		const notification = NotificationFactory.create(type, options);
		return notification.send(message);
	} catch (error) {
		console.error(`Failed to send notification: ${error.message}`);
		return { success: false, error: error.message };
	}
}

sendNotification('email', { to: 's@sgmail.com', subject: 'Hello!' }, 'This is an email notification.');
sendNotification('sms', { to: '+1234567890' }, 'This is an SMS notification.');
sendNotification('push', { deviceToken: 'abc123', title: 'New Alert!' }, 'This is a push notification.');