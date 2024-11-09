### Sentiment-Analysis-of-Product-Reviews

front end:
  - login page
    - username / email
    - password
  - signup page
    - username (unique)
    - email
    - password
    - password conf
  - review page
    - heading of review
    - review of the product
    - submit review button
    - display sentiment 

Folder Structure :
  - Data
    - insert kaggle link here
  - AI-ML
    - csv-modification.ipynb -> contains code to modify the csv file
    - model-maker.ipynb -> contains code to make the model
    - testing.py -> contains code to test snippets of code using dummy data
    - metrics.ipynb -> to calculate the metrics : accuracy, precision, recall, f1 score and confusion matrix
  - Flask
    - templates
      - index.html -> basic template to check flask functionality
    - app.py -> contains the backend of the project which receives the data through api call and gives the prediction
    - data_loader.py -> loads the model and file (tokenizer) for the prediction task
    - data_predict.py -> predicts if the review is positive or negative
