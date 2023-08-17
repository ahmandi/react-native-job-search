# JobSearch App

Welcome to the JobSearch App, a mobile application built using React Native, Hooks, and Expo. This app allows users to easily search for job listings using the JSearch API and provides features like searching, liking, and sharing job opportunities.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The JobSearch App is designed to streamline the process of finding job opportunities by utilizing the JSearch API. With a user-friendly interface and intuitive features, this app aims to make job hunting easier and more efficient.

## Features

- **Search**: Seamlessly search for job listings based on keywords and filters.
- **Like**: Save your favorite job listings for later reference.
- **Share**: Share interesting job opportunities with friends and contacts.
- **Real-Time Data**: Get real-time job data from the JSearch API.

## Getting Started

To get started with the JobSearch App, follow these steps:

## Installation

1. Clone the repository: `git clone git@github.com:ahmandi/react-native-job-search.git`
2. Navigate to the project directory: `cd react-native-job-search`
3. Install dependencies: `npm install`

## Usage

To run the app locally, use the following command:

```
npm start
```

This will launch the Expo development server and provide you with a QR code to scan using the Expo Go app on your mobile device, you can easily find in your App Store.

## API Integration

The JobSearch App utilizes the JSearch API to retrieve job listings. The API integration is handled using the RapidAPI service. To set up the API integration, follow these steps:

1. Sign up for a RapidAPI account: [RapidAPI Signup](https://rapidapi.com/signup)
2. Subscribe to the JSearch API: [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
3. Retrieve your API key from RapidAPI.
4. Create a `.env` file in the project directory and add your API key as follows:

```
RAPID_API_KEY=YOUR_API_KEY
```

## Contributing

Contributions to the JobSearch App are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
