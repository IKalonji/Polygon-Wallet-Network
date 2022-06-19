<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IKalonji/Polygon-Wallet-Network">
  </a>

  <h3 align="center">Polygon-Wallet-Network</h3>

  <p align="center">
    Wallet network visualizer on Polygon using Covalent API and Unstoppable domains login. 
    <br />
    <a href="https://github.com/IKalonji/Polygon-Wallet-Network/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://polygon-network-visualizer.vercel.app/">Click to view demo site</a>
    ·
    <a href="https://github.com/IKalonji/Polygon-Wallet-Network/issues">Report Bug</a>
    ·
    <a href="https://github.com/IKalonji/Polygon-Wallet-Network/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/IKalonji/Polygon-Wallet-Network/blob/main/README.md)

Polygon-Wallet-Network is a visualizer for wallet and contract networks. This enables us to visually see the wallets and contracts that a particular wallet has interacted with.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Unstoppable Domains](https://unstoppabledomains.com/)
* [Polygon](https://polygonscan.com/)
* [Covalent](https://www.covalenthq.com/docs/developer/)
* [Angular](https://angular.io/)
* [Python](https://www.python.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Notice

1. This project is not audited and should not be used in a production environment.

<!-- GETTING STARTED -->
## Getting Started

Follow the steps below on how to run the project locally.

### Prerequisites

Please install the below required software in order to run the project.

* NodeJs
  [NodeJS](https://nodejs.org/about/releases)

* npm
  ```sh
  npm install npm@latest -g
  ```

* angular
  ```sh
  npm install -g @angular/cli
  ```

* Install Python Python
  [Python](https://www.python.org/)


### Installation

#### NOTE: Please request CLIENT ID and CLIENT SECRET in order to test with the Web3Auth (Default values provided in app.component.ts file).  

1. Clone the repo
   ```sh
   git clone https://github.com/IKalonji/Polygon-Wallet-Network.git
   ```
2. cd into the project and run the below command to install the requied Python modules
   ```sh
   cd Polygon-Wallet-Network
   pip install -r requirements.txt
   ```
3. cd into the Backend folder and run the server. (KEEP THE SERVER RUNNING)
   ```sh
   cd RequestHandler
   python app.py
   ```
4. Take note of the Port URL in the terminal output, we'll use that for our server endpoint. Example:
  ```sh
  * Serving Flask app 'app' (lazy loading)
  * Environment: production
    WARNING: This is a development server. Do not use it in a production deployment.
    Use a production WSGI server instead.
  * Debug mode: off
  * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
  ```
5. cd into the frontend install dependecies then paste your Port URL in the covalent.service.ts file:
  ```sh
  cd ..
  cd MobileDapp
  npm install
  ```
6. Now, we can build the frontend with Ionic and create an APK with Android Studio. In the terminal run:
  ```sh
  ng servew --open
  ```


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

[Live Demo](https://polygon-network-visualizer.vercel.app/)


_Please refer to the [Documentation](https://github.com/IKalonji/Polygon-Wallet-Network/blob/main/README.md)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Add multichain support
- [ ] Add optimize queries


See the [open issues](https://github.com/IKalonji/Polygon-Wallet-Network/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Issa Kalonji - [@ISSDawg](https://twitter.com/ISSDawg) - ikalonji@student.wethinkcode.co.za - [Discord](Issa_Kalonji#4638)

Project Link: [https://github.com/IKalonji/Polygon-Wallet-Network](https://github.com/IKalonji/Polygon-Wallet-Network)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Unstoppable Domains](https://unstoppabledomains.com/)
* [Polygon](https://polygonscan.com/)
* [Covalent](https://www.covalenthq.com/docs/developer/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IKalonji/Polygon-Wallet-Network.svg?style=for-the-badge
[contributors-url]: https://github.com/IKalonji/Polygon-Wallet-Network/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IKalonji/Polygon-Wallet-Network.svg?style=for-the-badge
[forks-url]: https://github.com/IKalonji/Polygon-Wallet-Network/network/members
[stars-shield]: https://img.shields.io/github/stars/IKalonji/Polygon-Wallet-Network.svg?style=for-the-badge
[stars-url]: https://github.com/IKalonji/Polygon-Wallet-Network/stargazers
[issues-shield]: https://img.shields.io/github/issues/IKalonji/Polygon-Wallet-Network.svg?style=for-the-badge
[issues-url]: https://github.com/IKalonji/Polygon-Wallet-Network/issues
[license-shield]: https://img.shields.io/github/license/IKalonji/Polygon-Wallet-Network.svg?style=for-the-badge
[license-url]: https://github.com/IKalonji/Polygon-Wallet-Network/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/issa-kalonji-b301851ba/
[product-screenshot]: ./image.PNG