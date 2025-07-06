---
title: Multi-Label Classification with Pytorch Lightning and Huggingface
date: "2023-03-01"
draft: false
description: Fine-tuning distilbert for multi-label classification of toxic comments
---

This post covers fine-tuning distilbert for multi-label classification of comments. The dataset I used can be found on [kaggle](https://kaggle.com/datasets/julian3833/jigsaw-toxic-comment-classification-challenge). The labels seen in this dataset are: `toxic`, `severe_toxic`, `obscene`, `threat`, `insult`, and `identity_hate`.

The code for this was inspired by this [notebook](https://github.com/rasbt/deeplearning-models/blob/master/pytorch-lightning_ipynb/transformer/distilbert-finetuning-ii.ipynb) by Sebastian Raschka [@rasbt](https://twitter.com/rasbt). It uses `Lightning` with `Pytorch`, and utilizes `Huggingface Transformers` to load the base model and tokenizer for `distilbert-base-uncased`

## Notes

The following sections talk a bit about some of the additional things you need to change in Sebastian's notebook to make this work. The following code is not perfect, but it worked pretty well and got decent results with little to no pre-processing of the comments.

### Tokenizer

- Make sure the input are strings, not `null` or `NaN`
  - Otherwise you will get an error, show below, which is returned when you have something that cannot be tokenized in the input.
  - I used `df["text"] = df["text"].str.lower()` on the column, which was enough to fix this issue.

```
ValueError: TextEncodeInput must be Union[TextInputSequence, Tuple[InputSequence, InputSequence]]
```

Additionally, I have the `is_split_into_words` flag set to `True` when loading the tokenizer from the pretrained model.

```python
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased", is_split_into_words=True)
```

### Model

When using `AutoModelForSequenceClassification.from_pretrained()` for multi-label classification, the `problem_type` needs to be set to `multi_label_classification`. This solution was discovered through [alexander's post](https://alexanderjunge.net/blog/til-multi-label-automodelforsequenceclassification/) after looking through the official documentation for multi-label classification. The official documentation was not updated for [this pr](https://github.com/huggingface/transformers/pull/14180) This changes the loss function to `BCEWithLogitsLoss()` from `CrossEntropyLoss()` or `MSELoss()` (depending on the problem type).

```python
model = AutoModelForSequenceClassification.from_pretrained(
	"distilbert-base-uncased",
	num_labels=6,
	problem_type="multi_label_classification"
)
```

- Additionally, you will need to add the number of labels as a property of the `LightningModule`.

### Metrics

If you are using torchmetrics for accuracy like I did, you will need to either add `task=multilabel` to the accuracy method, or import `MultilabelAccuracy` directly and set `num_labels` to the desired number (6, for my problem).

```python
self.val_acc = MultilabelAccuracy(num_labels=6)
self.test_acc = MultilabelAccuracy(num_labels=6)
```

## Code

The following show the code I used to finetune the model for multi-label sequence classification

### Imports

```python
import os
import random

## pathing
from pathlib import Path

## For data manipulation
import numpy as np
import pandas as pd

## Pytorch Imports
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import Dataset, DataLoader

## Lighting Imports
import pytorch_lightning as pt
from pytorch_lightning.callbacks import ModelCheckpoint
from pytorch_lightning.trainer import Trainer
from pytorch_lightning.core import LightningModule

## Finetune scheduler
from finetuning_scheduler import FinetuningScheduler

## Torchmetrics
from torchmetrics.classification import MultilabelAccuracy
```

### Tokenizer

Define the tokenizer. Notice that the defined the `problem_type` flag in `from_pretrained`

```python
model = AutoModelForSequenceClassification.from_pretrained(
    "distilbert-base-uncased",
    num_labels=6,
    problem_type="multi_label_classification"
)
```

### Dataset Class

Define the dataset using the following code.

```python
class JigsawDataset(Dataset):
    def __init__(self, dataset_dict, partition_key="train"):
        self.partition = dataset_dict[partition_key]

    def __getitem__(self, index):
        return self.partition[index]

    def __len__(self):
        return self.partition.num_rows
```

### Lightning Model

This has 6 labels and shows some of the gotchas mentioned above regarding the `MultilabelAccuracy` metrics, and the `self.num_labels` property

```python
class LightningModel(LightningModule):

    def __init__(self, model, learning_rate=5e-5):
        super().__init__()
       
        self.num_labels = 6
        self.learning_rate = learning_rate
        self.model = model
        self.val_acc = MultilabelAccuracy(num_labels=6)
        self.test_acc = MultilabelAccuracy(num_labels=6)

    def forward(self, input_ids, attention_mask, labels):
        return self.model(input_ids, attention_mask=attention_mask, labels=labels)


    def training_step(self, batch, batch_idx):
        label_toxic = batch["toxic"]
        label_severe_toxic = batch["severe_toxic"]
        label_obscene = batch["obscene"]
        label_threat = batch["threat"]
        label_insult = batch["insult"]
        label_identity_hate = batch["identity_hate"]
        labels = torch.stack((label_toxic, label_severe_toxic, label_obscene, label_threat, label_insult, label_identity_hate), axis=1).to(torch.float32)

        ids = batch["input_ids"]
        mask = batch["attention_mask"]
        outputs = self(ids, attention_mask=mask, labels=labels)

        self.log("train_loss", outputs["loss"])

        return outputs["loss"]  ## this is passed to the optimizer for training


    def validation_step(self, batch, batch_idx):
        label_toxic = batch["toxic"]
        label_severe_toxic = batch["severe_toxic"]
        label_obscene = batch["obscene"]
        label_threat = batch["threat"]
        label_insult = batch["insult"]
        label_identity_hate = batch["identity_hate"]

        labels = torch.stack((label_toxic, label_severe_toxic, label_obscene, label_threat, label_insult, label_identity_hate), axis=1).to(torch.float32)

        ids = batch["input_ids"]
        mask = batch["attention_mask"]
        outputs = self(ids, attention_mask=mask, labels=labels)    
        self.log("val_loss", outputs["loss"], prog_bar=True)
        logits = outputs["logits"]
        self.val_acc(logits, labels)
        self.log("val_acc", self.val_acc, prog_bar=True)

    def test_step(self, batch, batch_idx):
        label_toxic = batch["toxic"]
        label_severe_toxic = batch["severe_toxic"]
        label_obscene = batch["obscene"]
        label_threat = batch["threat"]
        label_insult = batch["insult"]
        label_identity_hate = batch["identity_hate"]
        labels = torch.stack((label_toxic, label_severe_toxic, label_obscene, label_threat, label_insult, label_identity_hate), axis=1).to(torch.float32)

        ids = batch["input_ids"]
        mask = batch["attention_mask"]
        outputs = self(ids, attention_mask=mask, labels=labels)      
        logits = outputs["logits"]
       
        self.test_acc(logits, labels)
        self.log("accuracy", self.test_acc, prog_bar=True)
       
    def configure_optimizers(self):
        optimizer = torch.optim.Adam(self.parameters(), lr=self.learning_rate)

        return optimizer

```

### Prepare the Data

Open the kaggle dataset `train.csv` file and perform some steps to prepare it for our model.

```python
## Define a variable to store the input and temp output path
input_path = Path("input/")
output_path = Path("output/")

## Read the train csv file, rename the comment_text column, and make sure
## the column is a lowercase string
df = pd.read_csv(input_path / "train.csv").dropna()
df = df.rename(columns={"comment_text": "text"})
df["text"] = df["text"].str.lower()

## Drop the ID field since we don't need it
df.drop(columns=["id"], inplace=True)

## Shuffle the dataframe and split the data into train, validation, and test
df_shuffled = df.sample(frac=1, random_state=1).reset_index()
df_train = df_shuffled.iloc[:100_000]
df_val = df_shuffled.iloc[100_000:140_000]
df_test = df_shuffled.iloc[140_000:]

## Save the new shuffled data into csv files to be opened later
df_train.to_csv(output_path / "train.csv", index=False, encoding="utf-8")
df_val.to_csv(output_path / "validation.csv", index=False, encoding="utf-8")
df_test.to_csv(output_path / "test.csv", index=False, encoding="utf-8")
```

### Load the Dataset

Define the dataset using `load_data` from `Dataset`

```python
from torch.utils.data import Dataset, DataLoader

jigsaw_dataset = load_dataset(
    "csv",
    data_files={
        "train": str(output_path / "train.csv"),
        "validation": str(output_path / "validation.csv"),
        "test": str(output_path / "test.csv"),
    },
)
```

### Tokenize the inputs

Tokenize the input text

```python
def tokenize_text(batch):
    return tokenizer(
        batch["text"],
        truncation=True,
        padding=True,
    )

jigsaw_tokenized = jigsaw_dataset.map(tokenize_text, batched=True, batch_size=None)

jigsaw_tokenized.set_format("torch", columns=["input_ids", "attention_mask", "toxic", "severe_toxic", "obscene", "threat", "insult", "identity_hate"])
```

### Create the Dataloaders

```python
## Create the datasets
train_dataset = JigsawDataset(jigsaw_tokenized, partition_key="train")
val_dataset = JigsawDataset(jigsaw_tokenized, partition_key="validation")
test_dataset = JigsawDataset(jigsaw_tokenized, partition_key="test")

## Create the dataloaders
train_loader = DataLoader(
    dataset=train_dataset,
    batch_size=4,
    shuffle=True,
    num_workers=4
)

val_loader = DataLoader(
    dataset=val_dataset,
    batch_size=3,
    num_workers=4
)

test_loader = DataLoader(
    dataset=test_dataset,
    batch_size=2,
    num_workers=4
)
```

```python
lightning_model = LightningModel(model)

callbacks = [
    ModelCheckpoint(save_top_k=1, mode="max", monitor="val_acc"),  ## save top 1 model
    FinetuningScheduler()
]

trainer = Trainer(
    max_epochs=5,
    callbacks=callbacks,
    accelerator="gpu",
    devices=[0],
    log_every_n_steps=10,
    precision="16"
)

trainer.fit(
    model=lightning_model,
    train_dataloaders=train_loader,
    val_dataloaders=val_loader
)


```

```python
## Test the train, val, and test loaders
trainer.test(lightning_model, dataloaders=train_loader, ckpt_path="best")
trainer.test(lightning_model, dataloaders=val_loader, ckpt_path="best")
trainer.test(lightning_model, dataloaders=test_loader, ckpt_path="best")
```

## Results

This outputs the following results

```python
[{'accuracy': 0.9737749695777893}]
[{'accuracy': 0.9733250141143799}]
[{'accuracy': 0.974358320236206}]
```

Not great, but not bad either
