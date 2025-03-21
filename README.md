# React Ticketing App

A simple React-based ticketing system where users can submit, edit, delete, and sort support tickets by priority.

## Features

- Submit tickets with a title, description, and priority (Low, Medium, High)
- Edit and update existing tickets
- Delete tickets
- Sort tickets by priority: High to Low or Low to High
- Real-time form updates and error handling

## Technologies Used

- React (with Hooks)
- useReducer for state management
- Custom reducer and sorting utility functions
- CSS for styling

## Project Structure

```
├── App.js                # Main app component with global state
├── components/
│   ├── TicketForm.js     # Ticket submission/editing form
│   ├── TicketList.js     # Renders list of all tickets
│   └── TicketItem.js     # Individual ticket component
├── reducers/
│   └── ticketReducers.js # Reducer logic for managing tickets
├── utils/
│   └── sortUtil.js       # Utility to sort tickets by priority
├── styles.css            # Custom styling
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-ticketing-app.git
cd react-ticketing-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Usage

1. Fill out the ticket form with a title, description, and priority level.
2. Click **Submit** to add the ticket to the list.
3. Use the dropdown to sort tickets by priority.
4. Use **Edit** to modify an existing ticket.
5. Click **Delete** to remove a ticket.

## Customization

You can adjust the visual styling by editing `styles.css` and `App.css`.

## License

This project is open source under the [MIT License](LICENSE).

## Author

Developed by [@jeffgrahamcodes](https://www.jeffgraham.codes/). Contributions and feedback are welcome!
