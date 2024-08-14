# ReachInbox Assignment

This repository contains the implementation of the ReachInbox Assignment. The project is designed to meet the following requirements:

### Features

1. **Login Page**
   - Implements user authentication with a provided design.
   - Redirects to the onebox screen upon successful login.

2. **Onebox Screen**

   Data Fetching:
   
      - Fetches data using the /onebox/list API endpoint.
      - View specific threads using GET /onebox/:thread_id.
      - Delete threads using DELETE /onebox/:thread_id.
   
   Keyboard Shortcuts:

      - Press D to delete a thread.
      - Press R to open the reply box.

   Custom Text Editor:

      - A custom text editor is provided with added "SAVE" and "Variables" buttons.

   Reply Functionality:
      - Allows users to send a reply using the POST /reply/:thread_id API endpoint.


   Light and Dark Mode:
      - The application supports both light and dark modes, allowing users to switch between them.

## Installation

Clone the repository:

      git clone https://github.com/yourusername/reachinbox-assignment.git

Install the required dependencies:

      npm install

Run the application:

      npm start


## API Documentation
The API documentation is available [here][running tests](https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27).

## Design File
The design for the application can be viewed [here](https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design).
