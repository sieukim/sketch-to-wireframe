from mmdet.apis import init_detector, inference_detector


# 물체 검출 모델 클래스
class Detector:
    # config: 모델 설정 파일
    # checkpoint: pretrained 모델
    # device: 실행 기기(cpu 또는 cuda)
    def __init__(self, config, checkpoint, device="cpu"):
        self.config = config
        self.checkpoint = checkpoint
        self.model = init_detector(config, checkpoint, device)

    def detect(self, fname):
        return inference_detector(self.model, fname)
