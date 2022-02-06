from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def news(request):
    return render(request, 'news.html')
