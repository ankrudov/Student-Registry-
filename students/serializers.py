from rest_framework import serializers
from .models import Student

#the serializer allows data like querysets and model instances to be converted to python and then the data can be rendered as a JSON
class StudentSerializer(serializers.ModelSerializer):
    #the meta class defines the metadata information our model has(database) and that must be converted to the student class
    class Meta:
        model = Student
        fields = ('pk','name','email','document','phone','registration_date')
