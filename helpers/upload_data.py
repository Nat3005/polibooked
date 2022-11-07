
import sys
import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json
import pprint


if len(sys.argv) != 3:
    print("Uruchom: 'python upload_data.py NAZWA_KOLEKCJI DANE.json'")
    sys.exit(1)

collection = sys.argv[1]
data_file = sys.argv[2]

if not os.path.isfile("./serviceAccountKey.json"):
    print("Weź od Tomka plik serviceAccountKey.json")
    sys.exit(2)

cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

with open(data_file) as f:
    data = json.load(f)
    if type(data) == list:
        for it in data:
            print("\nAdding:")
            pprint.pprint(it)
            db.collection(collection).add(it)

    if type(data) == dict:
        for k,v in data.items():
            print(f"Adding {k}")
            doc_ref = db.collection(collection).document(k)
            doc_ref.set(v)
