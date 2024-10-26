import dill as pk
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
from data_loader import ModelLoader, TokenizerLoader
import re
from nltk.corpus import stopwords


TAG_RE = re.compile(r'<[^>]+>')

MODEL_LOADER = ModelLoader.get_instance()
lstm_model = MODEL_LOADER.get_data()

TOKENIZER_LOADER = TokenizerLoader.get_instance()
lstm_tokenizer = TOKENIZER_LOADER.get_data()

def remove_tags(text):
    return TAG_RE.sub('', text)


def preprocess_text(text):
    # remove tags and convert to lowercase
    sentence = remove_tags(text).lower()

    # remove punctuation, numbers, and single characters, and collapse multiple spaces
    sentence = re.sub(r'[^a-z\s]', ' ', sentence)  # remove non-alphabetic characters
    sentence = re.sub(r'\b[a-z]\b', '', sentence)  # remove single characters
    sentence = re.sub(r'\s+', ' ', sentence).strip()  # collapse multiple spaces

    # remove stopwords
    stop_words = set(stopwords.words('english'))
    sentence = ' '.join([word for word in sentence.split() if word not in stop_words])
    
    return sentence


def model_predict(text, tokenizer=lstm_tokenizer, model=lstm_model):
    clean_text = preprocess_text(text)
    sequence = tokenizer.texts_to_sequences([clean_text])
    padded_sequence = pad_sequences(sequence, maxlen=100)
    prediction = model.predict(padded_sequence)
    prediction = 'Negative' if prediction< 0.5 else 'Positive'
    
    return prediction


if __name__ == '__main__':
    text = "This is a good product and everyone should buy this product."
    
    print(model_predict(text))