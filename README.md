# MERN Smart Home Dashboard 

Welcome to the MERN Smart Home Dashboard project! This is a fully static client-side application built with React that simulates a smart home dashboard interface.

## Features

- Interactive dashboard for managing room details and device statuses
- Real-time simulated updates on temperature, humidity, and device statuses
- Weather charts with mock data
- Device control interface
- Room management system
- Historical data visualization with mock data

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/i-amironman/Smart-Home-Dashboard-UI.git
   cd Smart-Home-Dashboard-UI
   ```

2. Install client dependencies: `cd client` && `npm install`

3. Start the client: `npm start`

## Usage

1. Access the dashboard by navigating to http://localhost:3000 in your browser.
2. View simulated real-time updates, control devices, and manage room details.
3. All data is generated locally - no external APIs or hardware required.

## Tech Stack

- **Frontend**: React 18 with Redux for state management
- **UI Components**: Material-UI (@mui/material)
- **Charts**: Chart.js with react-chartjs-2
- **Styling**: Styled Components
- **Data Generation**: @faker-js/faker for mock data

## Project Structure

```
client/
├── src/
│   ├── components/     # React components
│   ├── store/         # Redux store and slices
│   ├── data/          # Static data and configurations
│   ├── assets/        # Images and icons
│   └── utilities/     # Helper functions
```

