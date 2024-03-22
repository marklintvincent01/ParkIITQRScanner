# ParkIITQRScanner

ParkIITQRScanner is a mobile application built using React Native with Expo, designed to scan QR codes used for tagging vehicles entering and exiting MSU-IIT. The application streamlines the process of monitoring vehicle movements within the campus.

## Features

- **QR Code Scanner**: Utilizes the Expo barcode scanner component to scan QR codes containing vehicle information.
- **Tagging**: Tags scanned data as either incoming or outgoing based on the direction of the vehicle.
- **Firebase Integration**: Uploads tagged data to a Firebase database for storage and retrieval.

## Getting Started

To get started with ParkIITQRScanner, follow these steps:

1. Clone the repository: `git clone https://github.com/your-repo-name.git`
2. Install dependencies: `npm install`
3. Configure Firebase:
   - Create a Firebase project.
   - Add your Firebase configuration to the app.
4. Run the application: `expo start`

## Usage

1. Launch the application on your mobile device using the Expo Go app.
2. Grant camera permissions when prompted.
3. Point the camera at the QR code to scan.
4. The application will tag the data as either incoming or outgoing based on the vehicle's direction.
5. Scanned data is uploaded to the Firebase database for storage and retrieval.

## Technologies Used

- React Native
- Expo
- expo-barcode-scanner
- Firebase

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
