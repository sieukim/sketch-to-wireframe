from django.urls import path

from .views import upload

# 앱 이름
app_name = "api"

# url 패턴
urlpatterns = [
    path("upload", upload, name="upload")
]
