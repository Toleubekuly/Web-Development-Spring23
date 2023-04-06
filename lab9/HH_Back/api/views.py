from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import models
# Create your views here.

def get_companies(request):
    companies = models.Company.objects.all()
    companies_json = [comp.to_json_format() for comp in companies]
    return JsonResponse(companies_json, safe = False)
def get_company(request,comp_id):
    try:
        company = models.Company.objects.get(id = comp_id)
    except models.Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)})
    return JsonResponse(company.to_json_format(),safe=False)

def get_company_vacancies(request,comp_id):
    comp = models.Company.objects.get(id=comp_id)
    vacancies = models.Vacancy.objects.filter(company = comp)
    vacancies_json = [vacancy.to_json_format() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_vacancies(request):
    vacancies = models.Vacancy.objects.all()
    vacancies_json = [vac.to_json_format() for vac in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_vacancy(request,vac_id):
    try:
        vacancy = models.Vacancy.objects.get(id = vac_id)
    except models.Vacancy.DoesNotExist as e:
        return JsonResponse({'error':str(e)})
    return JsonResponse(vacancy.to_json_format(),safe=False)

def top_ten_vacancy(request):
    vacancies = models.Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vac.to_json_format() for vac in vacancies]
    return JsonResponse(vacancies_json, safe=False)
