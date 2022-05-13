import json

from django.http import HttpResponse

from .detector import Detector
from .models import Document

# 물체 검출 모델 객체
dt = Detector(config="./config.py", checkpoint="./epoch_30.pth")


# 물체 검출 함수
def detect(fname):
    global dt

    # 물체 검출 결과
    result = dt.detect(fname=fname)

    # 배열 -> 리스트
    result_list = [value.tolist() for value in result]

    # 리스트 -> json
    result_json = json.dumps(result_list)

    return result_json


# 파일 업로드 함수
def upload(request):
    # POST
    if request.method == "POST":
        # Fetch
        file = request.FILES["uploadedFile"]

        # 데이터베이스에 저장
        document = Document(file=file)
        document.save()

        # 물체 검출 결과
        result = detect(fname=document.file.path)

        # http response 반환
        return HttpResponse(result, content_type="application/json")
