from django.http import HttpResponse, JsonResponse
import requests 


def index(request):
    return HttpResponse("<h2>Главная</h2>")


def searchsite(request):
    urlsite = request.GET.get('urlsite')
    r = requests.get(urlsite)
    if r.status_code == 200:
        return JsonResponse({"status": "Все збс"})
    if r.status_code != 200:
        return JsonResponse({"status": "Все херня, давай по новой"})
    return JsonResponse({"status": "Не найдено"})


def contact(request):
    return HttpResponse("<h2>Контакты</h2>")
