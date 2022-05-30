import json

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from .detector import Detector
from .models import Document

# 물체 검출 모델 객체
faster_rcnn = Detector(config="./model/faster_rcnn/config.py", checkpoint="./model/faster_rcnn/checkpoint.pth")
retinanet = Detector(config="./model/retinanet/config.py", checkpoint="./model/retinanet/checkpoint.pth")
tood = Detector(config="./model/tood/config.py", checkpoint="./model/tood/checkpoint.pth")
yolof = Detector(config="./model/yolof/config.py", checkpoint="./model/yolof/checkpoint.pth")
yolox = Detector(config="./model/yolox/config.py", checkpoint="./model/yolox/checkpoint.pth")


# 물체 검출 결과 반환 함수
def get_result(model, fname):
    # 물체 검출 결과
    result = model.detect(fname=fname)
    # 배열 -> 리스트
    return [value.tolist() for value in result]


# 물체 검출 함수
def detect(fname):
    global faster_rcnn, retinanet, tood, yolof, yolox

    # 각 모델 물체 검출 결과
    result = {
        "faster_rcnn": get_result(faster_rcnn, fname),
        "retinanet": get_result(retinanet, fname),
        "tood": get_result(tood, fname),
        "yolof": get_result(yolof, fname),
        "yolox": get_result(yolox, fname),
    }

    # 딕셔너리 -> 문자열
    return json.dumps(result)

# 파일 업로드 함수
@csrf_exempt
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
