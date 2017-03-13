from django.db import models

class News(models.Model):
    title = models.CharField(max_length=300)
    sentScore = models.FloatField(null=True)
    country = models.CharField(max_length=3)

    def __str__(self):
        return self.title
