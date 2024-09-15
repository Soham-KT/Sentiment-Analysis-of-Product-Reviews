import json

file = {
    'arr1' : [1, 2, 3, 4, 5],
    'arr2' : [6, 7, 8, 9, 10]
}

# Now write the JSON file
with open('AI-ML/data/testing.json', 'w') as f:
    json.dump(file, f, indent=4)