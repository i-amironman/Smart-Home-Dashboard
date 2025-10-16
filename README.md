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
   git clone https://github.com/i-amironman/Smart-Home-Dashboard.git
   cd Smart-Home-Dashboard
   ```

2. Install client dependencies: `npm install`

3. Start the client: `npm run dev`

## Usage

1. Access the dashboard by navigating to http://localhost:8080 in your browser.
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
├── .gitignore
├── README.md
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Dashboard.tsx
│   │   ├── EnergyChart.tsx
│   │   ├── QuickActions.tsx
│   │   ├── RoomCard.tsx
│   │   ├── StatusBar.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useAppDispatch.ts
│   ├── index.css
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── store
│   │   ├── activitySlice.ts
│   │   ├── roomsSlice.ts
│   │   └── store.ts
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

