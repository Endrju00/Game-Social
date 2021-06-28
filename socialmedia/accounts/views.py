from django.shortcuts import render, redirect
from django.views.generic import CreateView

from . import forms
# Create your views here.

def signUp(request):
    template_name = 'accounts/signup.html'
    print('siema')
    return redirect('login')
