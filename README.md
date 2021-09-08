# TecnoShop Aguilar

TecnoShop is a basic technology store based on ReactJs, to display, select and purchase items.

- [TecnoShop Aguilar](#tecnoshop-aguilar)
  - [📋 Prerequisites](#-prerequisites)
  - [🚀 Get the project](#-get-the-project)
  - [🔧 Start app](#-start-app)
    - [Considerations](#considerations)
  - [⚙️ Structure of code](#️-structure-of-code)
  - [🌆 Images & Photos](#-images--photos)

## 📋 Prerequisites

**Node**  
Install node (Ubuntu):
```bash
sudo snap install node --classic
```
Check the versions:
```bash
node --version
npm --version
```
This project was tested with node v14.17.3 and npm 6.14.13.

## 🚀 Get the project
Download and install the project:
```bash
git clone https://github.com/mauriaguilar/tecnoshop-aguilar
cd tecnoshop-aguilar
git checkout main
npm install
```
Configure the apiKey provided in the file:
```bash
src/firebase/config.js
```
In the firebaseConfig object, set the apiKey variable:
```javascript
apiKey: "<api-key-here>",
```
## 🔧 Start app

```bash
npm start
```
![use_example.gif](use_example.gif)

### Considerations
* Each product has 5 units in stock.
* It is not possible to add more than 5 units of each product to the cart.
* When you click on the Buy button, a purchase order is generated. The products are removed from the cart but the stock in the database is maintained so that the application can continue to be used.
## ⚙️ Structure of code

* App
  * NavBar
    * CartWidget
    * Button
  * Paths: **/** and **/category/:id**
    * ItemListContainer
      * ItemList
        * Item
  * Path: **/item/:id**
    * ItemDetailContainer
      * ItemDetail
        * ItemCount
  * Path: **/cart**
    * Cart
  * Path: **/checkout**
    * Checkout
  * Path: **/\***
    * NotFound
  * Others:
      * CartContext
      * Firebase

## 🌆 Images & Photos
All images were downloaded from https://pixabay.com/ and Pixabay licensed.
([Credits](./public/img/README.md))