from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils.translation import ugettext_lazy as _
# Create your views here.

def index(request):
    return render(request, 'frontend/index.html')

class Translate(APIView):
    def get(self, request):
        text = self.kwargs['text']
        translatedtext = _(text)
        return Response({"text": translatedtext})