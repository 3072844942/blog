from django.shortcuts import render

# Create your views here.

def index(request):
    img_list = [
        "/static/image/header/background1.jpg",
        "/static/image/header/background2.jpg",
    ]
    return render(request, 'index.html', { "img_list" : img_list })
