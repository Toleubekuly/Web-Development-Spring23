from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import models
# Create your views here.
def get_products(request):
    products = models.Product.objects.all()
    products_json = [prod.to_json_format() for prod in products]
    return JsonResponse(products_json,safe = False)

def get_product(request, product_id):
    products = models.Product.objects.all()
    products_json = [prod.to_json_format() for prod in products]
    for prod in products_json:
        if prod['id'] == product_id:
            return JsonResponse(prod)

    return JsonResponse({'error': 'Product not found'})

def get_categories(request):
    categories = models.Category.objects.all()
    categories_json = [cat.to_json_format() for cat in categories]
    return JsonResponse(categories_json, safe=False)

def get_category(request,id):
    categories = models.Category.objects.all()
    categories_json = [cat.to_json_format() for cat in categories]
    for cat in categories_json:
        if cat['id'] == id:
            return JsonResponse(cat)
    return JsonResponse({'error': 'Product not found'})

def get_products_category(request,id):
    products = models.Product.objects.all()
    products_json = [prod.to_json_format() for prod in products.filter(category=id)]
    return JsonResponse(products_json, safe=False)