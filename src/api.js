// import axios from 'axios';

// const API_BASE_URL = 'https://hiring.reachinbox.xyz/api/v1';

// // export const api = axios.create({
// //   baseURL: API_BASE_URL,
// // });
// // import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://hiring.reachinbox.xyz/api/v1',
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('authToken')}`,
//   },
// });


// // Get all mails
// export const getAllMails = () => api.get('/onebox/list');

// // Get onebox thread by ID
// export const getThreadById = (threadId) => api.get(`/onebox/messages/${threadId}`);

// // Delete email thread by ID
// export const deleteThreadById = (threadId) => api.delete(`/onebox/messages/${threadId}`);

// // Reset the inbox
// export const resetInbox = () => api.post('/onebox/reset');

// // Reply to an email thread
// export const replyToThread = (threadId, data) => api.post(`/onebox/reply/${threadId}`, data);

// // Google Login (Not fully implemented here as it requires a redirect)
// // export const googleLogin = () => {
// //   window.location.href = `${API_BASE_URL}/auth/google-login?redirect_to=https://frontend.com`;
// // };





import axios from 'axios';
const API_BASE_URL = 'https://hiring.reachinbox.xyz/api/v1';

const api = axios.create({
  baseURL: 'https://hiring.reachinbox.xyz/api/v1',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
});

export const getAllMails = () => api.get('/onebox/list');

export const getThreadById = (threadId) => api.get(`/onebox/messages/${threadId}`);

export const deleteThreadById = (threadId) => api.delete(`/onebox/messages/${threadId}`);

export const replyToThread = (threadId, data) => api.post(`/onebox/reply/${threadId}`, data);

export const resetInbox = () => api.post('/onebox/reset');




export const googleLogin = () => {
  window.location.href = `${API_BASE_URL}/auth/google-login?`;
};

