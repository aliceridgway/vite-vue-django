from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request: HttpRequest) -> HttpResponse:

    context = {"message": "Hello World"}

    return render(request, "index.html", context)
