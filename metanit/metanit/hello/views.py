from django.http import HttpResponse, JsonResponse
import requests
import json


def index(request):
    return HttpResponse("<h2>Главная</h2>")


def dog_pars(request):
    #dog_site = "dogurl":"https://random.dog/5af10b62-c508-4bbc-b5e2-142d25d842a2.jpg"
    r = requests.get('https://random.dog/woof.json')
    content = r.text
    to_python = json.loads(content)
    dog_site = to_python['url']
    return JsonResponse({"dogurl": dog_site})


def searchsite(request):
    try:
        urlsite = request.GET.get('urlsite')
        r = requests.get(urlsite)
        if r.status_code == 200:
            return JsonResponse({"status": "Все збс"})
        if r.status_code != 200:
            return JsonResponse({"status": "Все херня, давай по новой"})
        return JsonResponse({"status": "Не найдено"})
    except ValueError:
        return JsonResponse({"status": "Ссайте нет"})


def contact(request):
    return HttpResponse("<h2>Контакты</h2>")
