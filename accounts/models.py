from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):

    def __str__(self):
        return f'{self.user.username}'
