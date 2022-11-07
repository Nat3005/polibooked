# Firestore Data Adder
Script for adding data to firestore.

It supports 2 types of input:
- `dict` - where key is the ID in Firestore collection. **It overwrites documents iwth the same id!**. Sample [here](./dict_data.json)
- `list` - adds documents with random ID to Firestore collection. Sample [here](./list_data.json)


## Prepare to run
Install dependencies:

**Linux**:
```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
**Windows**(chyba):
```
python3 -m venv venv
venv/Scripts/activate
pip install -r requirements.txt
```
## Get key
Either go to https://console.firebase.google.com/u/5/project/polibooked/settings/serviceaccounts/adminsdk and press *Generate new private key* and name it `serviceAccountKey.json`

**OR**

contact [Tomasz Szandala](https://szandala.pro/)

## Running:
`python upload_data.py KOLEKCJA PLIK.json`
