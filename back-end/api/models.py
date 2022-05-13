from django.db import models


# 엔티티 클래스
class Document(models.Model):
    file = models.FileField(upload_to="files/")
    dateTimeOfUpload = models.DateTimeField(auto_now=True)
