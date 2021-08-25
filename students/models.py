from django.db import models

class Student(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document =  models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    registration_date = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name

#for data migration file creation run the following command in the terminal python manage.py makemigrations --empty --name "appname" "appname". direct manipulation of data
# After that, go to the django_react_proj/"yourapp"/migrations/000_2"yourapp".py folder and change the content to the following, changes in 0002 file