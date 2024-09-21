from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from.serializers import DestinationSerializer,UserSerializer,RequestSerializer
from rest_framework import viewsets
from .models import Destinations,Users
import json
from django.contrib.auth import authenticate ,login
from rest_framework.authtoken.models import Token
class DestinationViewSet(viewsets.ModelViewSet):
    serializer_class=DestinationSerializer
    queryset =Destinations.objects.all()
    @action(detail=False ,methods=['GET'],url_path=r'get_half',)
    def get_half_descreption(self,request):
        destinations=Destinations.objects.all()
        desseriadlizer=RequestSerializer(destinations,many=True)
        return Response(desseriadlizer.data,status=status.HTTP_200_OK)
    @action(detail=False ,methods=['GET'],url_path=r'get_ALL',)
    def get_all_description(self,request):
        destinations=Destinations.objects.all()
        desseriadlizer=DestinationSerializer(destinations,many=True)
        return Response(desseriadlizer.data,status=status.HTTP_200_OK)
    
class UserViewSet(viewsets.ModelViewSet):
    serializer_class =UserSerializer
    queryset=Users.objects.all() 
    @action(detail=False ,methods=['POST'],url_path=r'verif_user',)  
    def verif_user(self,request):
        print(request.body)
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        new=Users()
        newUser=User()
        new.city=body["city"]
        new.username=body["username"]
        newUser.email=body["email"]
        newUser.password=body["password"]
        newUser.username=body["username"]
        newUser.save()
        new.user=newUser
        new.save()
        token=Token.objects.create(user=newUser)
        token.save()
        print(token)
        
        return Response( {'usertoken':token.key},status=status.HTTP_200_OK)

    @action(detail=False ,methods=['POST'],url_path=r'verif_user_login',)
    def verif_user_login(self,request):
        
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        print(username)
        print(password)
        try:
            user= User.objects.get(username=username,password=password)
            
        except User.DoesNotExist:
            user=None
        print(user)
        if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                print(token)
                return Response({
                    'usertoken': token.key,
                    'user_id': user.pk,
                    'name': user.username,
                    
                })   
        else :
                return Response( None)