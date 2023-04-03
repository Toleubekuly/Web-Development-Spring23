from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    def to_json_format(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=0)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE,default=0)
    def to_json_format(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category.name
        }
